const Message = ({ text, className }) => {
  return (
    <div
      className={`text-[8px] leading-[120%] tracking-normal font-normal ${className} `}
    >
      {text}
    </div>
  );
};
export default Message;
