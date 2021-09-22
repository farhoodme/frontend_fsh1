const TextInput = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      class="border border-gray-300 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm w-full"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
