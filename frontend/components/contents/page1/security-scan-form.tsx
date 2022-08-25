import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  FindingInput,
  ScanResultInput,
  useScanMutation,
  ScanMutation,
} from "../../../generated/index";
import { fireSuccessSwalModal } from "functions/swal.function";
import { IconPlus } from "@tabler/icons";

interface ISecurityScanFormValue {
  repositoryName: string;
}

const securityScanSchema = yup.object({
  repositoryName: yup.string().required("Please fill repository name input"),
});

interface ISecurityScanFormProps {}

const SecurityScanForm: React.FC<ISecurityScanFormProps> = ({ ...props }) => {
  const {
    handleSubmit,
    trigger,
    setValue,
    getValues,
    register,
    control,
    formState: { errors },
  } = useForm<ISecurityScanFormValue>({
    resolver: yupResolver(securityScanSchema),
  });

  const { append, fields } = useFieldArray({ control, name: "findings" });

  const [scan] = useScanMutation({ onCompleted: handleComplete });

  /**
   * Reset all field value
   */
  function resetForm() {
    setValue("repositoryName", "");
  }

  /**
   * Handling if mutation is fired and is completed
   * @param resp From api
   */
  async function handleComplete(resp: ScanMutation) {
    if (resp.scan.success) {
      fireSuccessSwalModal(
        "Success Add Security Scan",
        "Security scan added successfully, and you can see it on security scan list page"
      );

      resetForm();
    }
  }

  /**
   * To handle on submit
   * @param value FormValue
   */
  async function onSubmit(value: ISecurityScanFormValue) {
    const findings: FindingInput[] = [
      {
        type: "acsd",
      },
    ];

    const input: ScanResultInput = {
      repositoryName: value.repositoryName,
      findings,
    };

    const { data } = await scan({
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
  function handleRepositoryNameChange(e: ChangeEvent<HTMLInputElement>) {
    setValue("repositoryName", e.target.value);
    trigger("repositoryName");
  }

  return (
    <Container fluid>
      <Header textAlign="center" as="h3">
        Add Your Security Scan By Filling This Form
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          fluid
          label="Repository Name"
          {...register("repositoryName")}
          placeholder="SDConnect"
          value={getValues("repositoryName")}
          onChange={handleRepositoryNameChange}
          error={errors?.repositoryName?.message}
        />

        <Button type="button">
          <IconPlus /> Add Finding
        </Button>

        <Button color="blue">Submit</Button>
      </Form>
    </Container>
  );
};
export default SecurityScanForm;
