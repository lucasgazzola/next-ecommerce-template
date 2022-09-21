import Head from "next/head";

import { AdminNavbar } from "components";
import type { LayoutProps } from "types/pageWithLayouts";

import style from "./AdminPageLayout.module.css";

const AdminPageLayout: LayoutProps = ({ children }) => {
  return (
    <div className={style.adminPageLayout}>
      <Head>
        <title>Admin</title>
      </Head>
      <main className={style.mainContent}>
        <AdminNavbar />
        <section className={style.adminPageContent}>{children}</section>
      </main>
      <footer></footer>
    </div>
  );
};

export default AdminPageLayout;
