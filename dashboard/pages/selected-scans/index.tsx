import { ROUTES } from "@constants/routes.constant";
import { GetServerSideProps } from "next";
import React from "react";

interface ISelectedScanPageProps {}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { redirect: { destination: ROUTES.allScansPage, permanent: false } };
};

const SelectedScanPage: React.FC<ISelectedScanPageProps> = ({ ...props }) => {
  return <div></div>;
};
export default SelectedScanPage;