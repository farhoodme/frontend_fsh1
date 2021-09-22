const Button = (props) => {
  const { type, text, bgColor, hoverColor, activeColor, textColor, extraClass } = props;
  return (
    <button
      className={`${bgColor} hover:${hoverColor} active:${activeColor} text-${textColor} text-base font-semibold py-3 px-4 rounded-lg shadow-md ${extraClass}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
