import { AdminPageLayout } from "layouts";
import { NextPage } from "next";
import Link from "next/link";

const Admin: NextPage = () => {
  return (
    <AdminPageLayout title="Home">
      <nav id="admin-dashbord-nav">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <details>
            <summary>Products</summary>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#555"
              }}
            >
              <Link href="admin/product/create">
                <a>Crear</a>
              </Link>
              <Link href="admin/product/edit">
                <a>Editar</a>
              </Link>
              <Link href="admin/product/delete">
                <a>Borrar</a>
              </Link>
            </div>
          </details>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Customer</span>
          </li>
          <li>
            <span>Messages</span>
          </li>
          <li>
            <span>Help</span>
          </li>
        </ul>
      </nav>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </AdminPageLayout>
  );
};

export default Admin;
