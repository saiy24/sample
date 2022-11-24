function Input(props) {
  return (
    <div className="Input">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
        autocomplete="false"
        onChange={props.onChange}
      />
      <label for={props.name}></label>
    </div>
  );
}

export default Input;
