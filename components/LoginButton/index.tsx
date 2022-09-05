import { CgProfile } from "react-icons/cg";
import style from "./LoginButton.module.css";

type Props = {};

function LoginButton({}: Props) {
  const handleLoginButtonClick = () => {
    alert("Login button clicked");
  };

  return (
    <button
      className={style.loginButton}
      type="button"
      title="Login"
      onClick={handleLoginButtonClick}
    >
      <CgProfile size={18} />
      Login
    </button>
  );
}

export default LoginButton;
