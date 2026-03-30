const MessageOption = ({ price, option }) => {
  return (
    <div className='flex gradient p-2 items-center justify-between w-37.75 rounded-t-lg rounded-br-lg rounded-bl-sm'>
      <div className='flex gap-3 items-center'>
        <div className='rounded-full w-3 h-3 border-pink-400 border'></div>
        <p className='text-white text-[8px] font-normal leading-[120%] tracking-normal'>
          {option}
        </p>
      </div>
      <p className='text-white text-xs'>{price}</p>
    </div>
  );
};
export default MessageOption;
