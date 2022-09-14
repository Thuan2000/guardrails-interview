/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

 import React, { useState, useEffect } from "react";
 import { useQuery } from "@apollo/client";
 import { getScansQuery } from "@graphql/queries";
 import { useRouter } from "next/router";
 
 import { DeleteScanMutation, useDeleteScanMutation } from "@generated/index";
 import { ROUTES } from "@constants/routes.constant";
 
 import {
   fireDeleteConfirmationModal,
   fireSuccessSwalModal,
 } from "functions/swal.function";
 
 const AllScansContainer: React.FC<any> = (props) => {
   const router = useRouter();
   const { loading, error, data } = useQuery(getScansQuery, {
     fetchPolicy: "network-only", // Doesn't check cache before making a network request
   });
   const [deleteScan] = useDeleteScanMutation({
     onCompleted: __handleDeleteComplete,
   });
   const [scans, setScans] = useState([]);
 
   useEffect(() => {
     if (data && data.getScans) {
       setScans(data.getScans);
     }
   }, [data]);
 
   /* Inversion of Control */
   async function handleDeleteBtnClick(id: number) {
     const { isConfirmed } = await fireDeleteConfirmationModal(
       "Delete Scan Result",
       "Are you sure want to delete scan result?"
     );
 
     if (isConfirmed) deleteScan({ variables: { id } });
   }
 
   /* Inversion of Control */
   async function handleEditBtnClick(id: number) {
     router.push(`${ROUTES.selectedScansPage}/${id}/edit`);
   }
 
   /* Private Utility Function */
   async function __handleDeleteComplete(resp: DeleteScanMutation) {
     if (resp.deleteScan.success) {
       const data = await fireSuccessSwalModal(
         "Success Delete Scan",
         "The scan result is successfully deleted"
       );
 
       if (data) setScans(scans.filter((s) => s.id !== resp.deleteScan.id));
     }
   }
 
   if (loading) return <div>Loading Scans ...</div>;
   return React.cloneElement(props.children, {
     scans,
     handleDeleteBtnClick,
     handleEditBtnClick,
   });
 };
 
 export default AllScansContainer;