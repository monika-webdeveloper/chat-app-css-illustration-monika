const MessageOption = ({ price, option }) => {
  return (
    <button
      className='flex gradient p-2 items-center justify-between w-37.75 rounded-t-lg rounded-br-lg rounded-bl-sm'
      type='button'
    >
      <span className='flex gap-3 items-center'>
        <span
          className='rounded-full w-3 h-3 border-pink-400 border'
          aria-hidden='true'
        ></span>
        <span className='text-white text-[8px] font-normal leading-[120%] tracking-normal'>
          {option}
        </span>
      </span>
      <span className='text-white text-xs'>{price}</span>
    </button>
  );
};
export default MessageOption;
