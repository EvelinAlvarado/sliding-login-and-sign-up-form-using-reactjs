import "./Input.css";

function Input(props) {
  /* cuando action es igual a Sign in y props title es igual a name, adicionar una clase para aplicar el estilo display:none class=inputHidden*/
  const classNameHidden =
    props.action === "Sign In" && props.title === "Name"
      ? "form-input input-hidden"
      : "form-input";
  return (
    <div className={classNameHidden}>
      <label className="form-input-label" for={props.forId}>
        {props.icon}
        {props.title}
      </label>
      <input
        className="input-field"
        type={props.type}
        id={props.forId}
        required
      />
    </div>
  );
}

export default Input;
