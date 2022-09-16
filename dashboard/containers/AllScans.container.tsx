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
} from "@common-utils/swal.function";

/*
  context to be used by 3rd-level children or deeper, avoid props-drilling
  If direct children or grandchildren (2nd-level or shallower), please use props directly.
*/
export const AllScansContext = React.createContext({});

const AllScansContainer: React.FC<any> = (props) => {
  const router = useRouter();
  const { loading, error, data } = useQuery(getScansQuery, {
    fetchPolicy: "network-only", // Doesn't check cache before making a network request
  });
  const [deleteScan] = useDeleteScanMutation({
    onCompleted: __handleDeleteComplete,
  });
  const [scans, setScans] = useState(
    data && data.getScans ? data.getScans : []
  );

  useEffect(() => {
    if (data && data.getScans) {
      setScans(data.getScans);
    }
  }, [data]);

  /**
    Used in ScanRow component. When user clicks the delete button.
    Deletes the corresponding scan result based on id.
    @param id - number
    @returns: void
  */
  async function handleDeleteBtnClick(id: number) {
    const { isConfirmed } = await fireDeleteConfirmationModal(
      "Delete Scan Result",
      "Are you sure want to delete scan result?"
    );

    if (isConfirmed) deleteScan({ variables: { id } });
  }

  /**
    Used in ScanRow component. When user clicks the edit button.
    Navigate to the edit page of corresponding scan result.
    @param id - number
    @returns: void
  */
  async function handleEditBtnClick(id: number) {
    router.push(`${ROUTES.selectedScansPage}/${id}/edit`);
  }

  /* If the page is still loading */
  if (loading) return <div>Loading Scans ...</div>;

  /*
   [Private Utility Function]
   Updates the 'scans' state after useDeleteScanMutation GraphQL mutation.
  */
  async function __handleDeleteComplete(resp: DeleteScanMutation) {
    if (resp.deleteScan.success) {
      const data = await fireSuccessSwalModal(
        "Success Delete Scan",
        "The scan result is successfully deleted"
      );

      if (data) setScans(scans.filter((s) => s.id !== resp.deleteScan.id));
    }
  }

  /* 
    [Private Utility Function]
    Assembles all logic handlers and state to be passed as props or context value.
  */
  function __assembleProps() {
    return { scans, handleDeleteBtnClick, handleEditBtnClick };
  }
  return (
    <AllScansContext.Provider value={__assembleProps()}>
      {React.cloneElement(props.children, __assembleProps())}
    </AllScansContext.Provider>
  );
};

export default AllScansContainer;
