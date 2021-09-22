import TextInput from "./TextInput";

const InputGroup = (props) => {
  const { label, type, name, placeholder } = props;
  return (
    <>
      <label
        className="block uppercase text-gray-600 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <TextInput type={type} name={name} placeholder={placeholder} />
    </>
  );
};

export default InputGroup;
