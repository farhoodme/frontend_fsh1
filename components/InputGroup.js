import TextInput from "./TextInput";

const InputGroup = (props) => {
  const { label, type, name, placeholder, onChange, value, error } = props;
  return (
    <>
      <label
        className="block uppercase text-gray-600 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <TextInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        error={error}
      />
    </>
  );
};

export default InputGroup;
