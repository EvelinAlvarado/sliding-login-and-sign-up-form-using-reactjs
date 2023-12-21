import "./Input.css";

function Input(props) {
  return (
    <div className="form-input">
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
