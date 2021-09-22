const TextInput = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      className="border border-gray-300 py-3 px-4 placeholder-gray-300 text-gray-600 bg-white rounded-lg text-base w-full"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
