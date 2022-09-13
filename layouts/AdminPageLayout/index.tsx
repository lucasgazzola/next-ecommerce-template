import Head from "next/head";

import style from "./AdminPageLayout.module.css";

type Props = { children: React.ReactNode; title?: string };

function AdminPageLayout({ title = "Home", children }: Props) {
  return (
    <div className={style.adminPageLayout}>
      <Head>
        <title>{`${title} / Admin`}</title>
      </Head>
      <main className={style.mainContent}>{children}</main>
      <footer></footer>
    </div>
  );
}

export default AdminPageLayout;
