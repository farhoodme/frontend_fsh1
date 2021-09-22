const TextInput = (props) => {
  const { type, name, placeholder, onChange, value, error } = props;

  return (
    <input
      type={type}
      name={name}
      className={`border ${error ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"} py-3 px-4 placeholder-gray-300 text-gray-600 rounded-lg text-base w-full`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextInput;
