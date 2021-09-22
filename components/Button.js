const Button = (props) => {
  const {
    type,
    text,
    bgColor,
    hoverColor,
    activeColor,
    textColor,
    extraClass,
    isLoading,
  } = props;
  return (
    <button
      className={`inline-flex items-center justify-center disabled:opacity-50 ${bgColor} hover:${hoverColor} active:${activeColor} text-${textColor} text-base font-semibold py-3 px-4 rounded-lg shadow-md ${extraClass}`}
      type={type}
      disabled={isLoading}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
      )}
      {text}
    </button>
  );
};

export default Button;
