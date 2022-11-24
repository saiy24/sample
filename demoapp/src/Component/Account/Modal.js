import Logo from "./Logo";
import Input from "./Input";
import { useState } from "react";
import Student from "../Student/Student";

function Modal(props) {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [redirectStudent, setRedirectStudent] = useState(false);

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };

  const pwdChange = (event) => {
    setPwd(event.target.value);
  };

  const onSubmit = () => {
    if (userName == "Sai" && pwd == "123") {
      debugger;
      setRedirectStudent(true);
    }
  };
  return (
    <div>
      {redirectStudent ? (
        <Student />
      ) : (
        <div className="Modal">
          <Logo />
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="username"
              onChange={userNameChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={pwdChange}
            />
            <button> Sign In</button>
          </form>
          <div className="social-signin">
            <button className="fb" onClick={props.onClick}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </button>
            <button className="tw" onClick={props.onClick}>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </button>
          </div>
          <a href="#">Lost your password ?</a>
        </div>
      )}
    </div>
  );
}

export default Modal;
