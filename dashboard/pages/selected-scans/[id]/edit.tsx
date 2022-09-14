/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";
import { GetServerSideProps } from "next";
import { generateApollo } from "@lib/withApollo";
import { getScanQuery } from "@graphql/queries";
import { ScanResult } from "@generated/index";
import SecurityScanForm from "@components/security-scan-form";
import { removeTypename } from "@common-utils/util.function";
import SecurityScanFormContainer from "@containers/SecurityScanForm.container";
import { placeholderSecurityScanFormProps } from "@constants/placeholder-props";

interface ISelectedScanEditPageProps {
  scan: ScanResult;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const apollo = generateApollo({}, ctx, true);
  const { data } = await apollo.query({
    query: getScanQuery,
    variables: { id: parseInt(query.id as string) },
  });
  const scan = data.getScan;

  return { props: { scan: removeTypename(scan) } };
};

const SelectedScanEditPage: React.FC<ISelectedScanEditPageProps> = ({
  scan,
}) => {
  return (
    <SecurityScanFormContainer initValue={scan}>
      <SecurityScanForm {...placeholderSecurityScanFormProps} />
    </SecurityScanFormContainer>
  );
};

(SelectedScanEditPage as TReactComponentWithLayout).Layout = PageLayout;

export default SelectedScanEditPage;