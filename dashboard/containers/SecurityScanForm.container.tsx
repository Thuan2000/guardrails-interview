/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React, { ReactElement, JSXElementConstructor, useEffect } from "react";
import {
  FieldArrayWithId,
  SubmitHandler,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  useForm,
  UseFormReturn,
  useWatch,
} from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ScanResult,
  EStatus,
  useInputNewScanMutation,
  useUpdateScanMutation,
  UpdateScanMutation,
  InputNewScanMutation,
  FindingInput,
  ScanResultInput,
} from "@generated/index";
import { generateScanFormDefaultValue } from "./utils";
import {
  fireDeleteConfirmationModal,
  fireSuccessSwalModal,
} from "@common-utils/swal.function";
import {
  ISecurityScanFormValue,
  securityScanFormSchema,
  findingDefaultValue,
} from "./types";
import { ROUTES } from "@constants/routes.constant";
import { placeholderSSFContext } from "@constants/placeholder-props";
import { ButtonProps } from "semantic-ui-react";
export interface ISSFContext {
  initValue?: ScanResult;
  methods?: UseFormReturn<ISecurityScanFormValue, any>;
  status: EStatus;
  scan: any;
  updateScan: any;
  scanning: boolean;
  updating: boolean;
  handleInputChange: Function;
  onSubmit?: SubmitHandler<ISecurityScanFormValue>;
  getError: Function;
  handleAddFinding: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => void;
  handleDeleteFinding: (idx: number) => void;
  fields?: FieldArrayWithId<ISecurityScanFormValue, "findings", "id">[];
  append?: UseFieldArrayAppend<ISecurityScanFormValue, "findings">;
  remove?: UseFieldArrayRemove;
}

/* 
   context to be used by 3rd-level children or deeper, avoid props-drilling 
   If direct children or grandchildren (2nd-level or shallower), please use props directly.
 */
export const SecurityScanFormContext = React.createContext(
  placeholderSSFContext
);

const SecurityScanFormContainer: React.FC<any> = (props) => {
  const router = useRouter();
  const { initValue } = props;
  const methods = useForm<ISecurityScanFormValue>({
    resolver: yupResolver(securityScanFormSchema),
    defaultValues: generateScanFormDefaultValue(props.initValue),
  });
  const {
    trigger,
    setValue,
    register,
    control,
    formState: { errors },
  } = methods;

  const status = useWatch<ISecurityScanFormValue>({
    control,
    name: "status",
  }) as EStatus;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "findings",
  });

  useEffect(() => {
    register("repositoryName");
  }, []);

  const [scan, { loading: scanning }] = useInputNewScanMutation({
    onCompleted: __handleCreateComplete,
  });
  const [updateScan, { loading: updating }] = useUpdateScanMutation({
    onCompleted: __handleUpdateComplete,
  });

  /**
   * Reset all field value
   */
  function __resetForm() {
    setValue("repositoryName", "");
    setValue("status", null);
    setValue("queuedAt", null);
    setValue("scanningAt", null);
    setValue("finishedAt", null);
    setValue("findings", []);
  }

  async function __handleUpdateComplete(resp: UpdateScanMutation) {
    if (resp.updateScan.success) {
      await fireSuccessSwalModal(
        "Success Update Security Scan",
        "Security scan updated successfully, and you can see it on security scan list page"
      );

      __resetForm();
      router.replace(ROUTES.allScansPage);
    }
  }

  /**
   * Handling if mutation is fired and is completed
   * @param resp From api
   */
  async function __handleCreateComplete(resp: InputNewScanMutation) {
    if (resp.inputNewScan.success) {
      await fireSuccessSwalModal(
        "Success Add Security Scan",
        "Security scan added successfully, and you can see it on security scan list page"
      );

      __resetForm();
      router.replace(ROUTES.allScansPage);
    }
  }

  async function handleAddFinding() {
    const d = await trigger("findings");
    // First finding form not yet added then we return
    if (!d && fields.length >= 1) return;
    append(findingDefaultValue);
  }

  async function handleDeleteFinding(idx: number) {
    const { isConfirmed } = await fireDeleteConfirmationModal(
      "Delete Finding?",
      "Are you sure want to delete finding?"
    );

    if (isConfirmed) remove(idx);
  }

  /**
   * To handle on submit
   * @param value FormValue
   */
  async function onSubmit(value: ISecurityScanFormValue) {
    const findings = value.findings.map((f) => {
      const finding: FindingInput = {
        type: f.type,
        ruleId: f.ruleId,
        locationBeginLine: f.begin,
        locationEndLine: f.end,
        locationPath: f.path,
        metaDescription: f.description,
        metaSeverity: f.severityType,
      };

      return finding;
    });

    const input: ScanResultInput = {
      repositoryName: value.repositoryName,
      findings,
      status: value.status,
      finishedAt: new Date(value.finishedAt).getTime(),
      queuedAt: new Date(value.queuedAt).getTime(),
      scanningAt: new Date(value.scanningAt).getTime(),
    };

    if (!!props.initValue) {
      updateScan({
        variables: {
          id: parseInt(props.initValue.id + ""),
          input,
        },
      });
    } else
      scan({
        variables: {
          input,
        },
      });
  }

  /**
   * Because {...register(e)} not working on this semantic ui component
   * we customize the value like this
   * @param e HTML Change event
   */
  function handleInputChange(key, value: any) {
    setValue(key, value);
    trigger(key);
  }

  function getError(key) {
    return errors?.[key]?.message;
  }

  /* 
     [Private Utility Function]
     Assembles all logic handlers and state to be passed as props or context value.
   */
  function __assembleProps(): ISSFContext {
    return {
      methods,
      status,
      scan: !!initValue ? initValue : scan,
      updateScan,
      scanning,
      updating,
      handleInputChange,
      onSubmit,
      getError,
      handleAddFinding,
      handleDeleteFinding,
      fields,
      append,
      remove,
    };
  }
  return (
    <SecurityScanFormContext.Provider value={__assembleProps()}>
      {React.cloneElement(
        props.children as ReactElement<
          any,
          string | JSXElementConstructor<any>
        >,
        __assembleProps()
      )}
    </SecurityScanFormContext.Provider>
  );
};

export default SecurityScanFormContainer;
