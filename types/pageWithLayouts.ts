import { NextPage } from "next";
import type { ReactElement } from "react";
import { PageLayout, AdminPageLayout, UniqueProductLayout } from "layouts";

export type PageWithMainLayoutType = NextPage & {
  layout: typeof PageLayout;
  subLayout?: typeof UniqueProductLayout;
};

export type PageWithAdminLayoutType = NextPage & {
  layout: typeof AdminPageLayout;
};

export type PageWithLayoutType =
  | PageWithMainLayoutType
  | PageWithAdminLayoutType;

export type LayoutProps = ({
  children
}: {
  children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;
