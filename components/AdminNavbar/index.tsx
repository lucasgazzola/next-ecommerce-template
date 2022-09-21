import Link from "next/link";

import style from "./AdminNavbar.module.css";

type Props = {};

function AdminNavbar({}: Props) {
  return (
    <nav id="admin-dashbord-nav" className={style.adminNavbarContainer}>
      <h3>Dashboard</h3>
      <ul>
        <li>
          <details>
            <summary style={{ cursor: "pointer", userSelect: "none" }}>
              Products
            </summary>
            <div className={style.productsCrudContainer}>
              <Link href="admin/products/create">
                <a>Crear</a>
              </Link>
              <Link href="admin/products/edit">
                <a>Editar</a>
              </Link>
              <Link href="admin/products/delete">
                <a>Borrar</a>
              </Link>
            </div>
          </details>
        </li>
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
  );
}

export default AdminNavbar;
