/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

 import React from "react";
 import {
   Button,
   Divider,
   DropdownItemProps,
   Form,
   Grid,
   Segment,
 } from "semantic-ui-react";
 import { FormProvider, UseFormReturn, SubmitHandler } from "react-hook-form";
 
 import { EStatus, ScanResult } from "@generated/index";
 import FindingsForm from "./FindingsForm";
 import { ISecurityScanFormValue } from "./SecurityScanFormSchema";
 import { toTitleCase } from "@common-utils/util.function";
 import DatetimeInput from "@components/DatetimeInput";
 import { ISSFContext } from "@containers/SecurityScanForm.container";
 
 const statusOptions: DropdownItemProps[] = Object.values(EStatus).map((s) => ({
   text: toTitleCase(s),
   value: s,
 }));
 
 const timeInputPointRef: { [status in EStatus]: number } = {
   Failure: 3,
   Queued: 1,
   InProgress: 2,
   Success: 3,
 };
 
 const SecurityScanForm: React.FC<ISSFContext> = (props) => {
   const {
     methods,
     status,
     scanning,
     updating,
     handleInputChange,
     onSubmit,
     getError,
   } = props;
 
   const {
     handleSubmit,
     getValues,
     formState: { errors },
   } = methods;
 
   return (
     <div style={{ width: "868px", margin: "auto" }}>
       <Segment>
         <FormProvider {...props.methods}>
           <Form onSubmit={handleSubmit(onSubmit)}>
             <Form.Input
               label="Repository Name"
               placeholder="SDConnect"
               value={getValues("repositoryName") || ""}
               onChange={(e) =>
                 handleInputChange("repositoryName", e.target.value)
               }
               error={errors?.repositoryName?.message}
             />
             <Form.Select
               label="Status"
               placeholder="Status"
               options={statusOptions}
               onChange={(_, { value }) => {
                 handleInputChange("status", value);
               }}
               value={getValues("status") || ""}
               error={errors?.status?.message}
             />
             <FindingsForm />
             {!!status && (
               <div style={{ padding: "10px 0 10px 0" }}>
                 <Grid>
                   {timeInputPointRef[status] >= 1 && (
                     <DatetimeInput
                       error={getError("queuedAt")}
                       label="Queue Date"
                       value={getValues("queuedAt")}
                       onChange={(e) =>
                         handleInputChange("queuedAt", new Date(e.toString()))
                       }
                     />
                   )}
                   {timeInputPointRef[status] >= 2 && (
                     <DatetimeInput
                       error={getError("scanningAt")}
                       label="Scanning Date"
                       value={getValues("scanningAt")}
                       onChange={(e) =>
                         handleInputChange("scanningAt", new Date(e.toString()))
                       }
                     />
                   )}
                   {timeInputPointRef[status] >= 3 && (
                     <DatetimeInput
                       error={getError("finishedAt")}
                       label="Finished Date"
                       value={getValues("finishedAt")}
                       onChange={(e) =>
                         handleInputChange("finishedAt", new Date(e.toString()))
                       }
                     />
                   )}
                 </Grid>
               </div>
             )}
             <Divider />
             <Button loading={scanning || updating} color="blue">
               {!!props.initValue ? "Update" : "Submit"}
             </Button>
           </Form>
         </FormProvider>
       </Segment>
     </div>
   );
 };
 export default SecurityScanForm;