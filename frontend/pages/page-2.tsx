import PageLayout from "@components/PageLayout";
import React from "react";

interface IPageTwoProps {}

const PageTwo: React.FC<IPageTwoProps> = ({ ...props }) => {
  return <div>Page 2</div>;
};

(PageTwo as any).Layout = PageLayout;

export default PageTwo;
