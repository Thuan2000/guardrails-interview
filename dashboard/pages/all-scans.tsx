/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import { GetServerSideProps } from "next";

import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";

import { getScansQuery } from "@graphql/queries";
import { generateApollo } from "@lib/withApollo";
import { ScanResult } from "@generated/index";
import AllScansTable from "@components/contents/all-scans/AllScansTable";

interface IAllScansPageProps {
  scans: ScanResult[] | null;
}

const AllScansPage: React.FC<IAllScansPageProps> = ({ scans = []}) => {
  return (
    <>
      <AllScansTable scans={scans} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apollo = generateApollo({}, ctx, true);
  const { data } = await apollo.query({
    query: getScansQuery,
  });

  return {
    props: {
      scans: data.getScans,
    },
  };
};

(AllScansPage as TReactComponentWithLayout).Layout = PageLayout;

export default AllScansPage;