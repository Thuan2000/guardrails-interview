import SecurityScanForm from "@components/contents/page1/security-scan-form";
import PageLayout from "@components/PageLayout";
import React from "react";

interface IPageOneProps {}

const PageOne: React.FC<IPageOneProps> = () => {
  return <SecurityScanForm />;
};

(PageOne as any).Layout = PageLayout;

export default PageOne;
