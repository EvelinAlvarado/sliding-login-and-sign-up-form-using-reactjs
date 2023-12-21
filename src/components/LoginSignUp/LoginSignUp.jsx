import "./LoginSignUp.css";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginSignUp() {
  return (
    <>
      <Title title="Sign Up" />
      <form className="form">
        <Input
          type="text"
          title="Name"
          forId="username"
          icon={<i className="bi bi-person-fill"></i>}
        />
        <Input
          type="email"
          title="E-mail"
          forId="email"
          icon={<i className="bi bi-envelope-at-fill"></i>}
        />
        <Input
          type="password"
          title="Password"
          forId="password"
          icon={<i className="bi bi-shield-lock-fill"></i>}
        />
        <div className="password-assistance">
          <span>
            Need help with your password?
            <a href="#" className="recovery-link">
              Recover your password
            </a>
          </span>
        </div>
        <div className="button-container">
          <Button title="Sign Up" />
          <Button title="Sign In" />
        </div>
      </form>
    </>
  );
}

export default LoginSignUp;
