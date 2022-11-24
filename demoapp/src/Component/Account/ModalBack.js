function ModalBack(props) {
  return (
    <button
      className="bringitback"
      onClick={props.onClick}
      key={props.className}
    >
      Brind the modal back !
    </button>
  );
}

export default ModalBack;
