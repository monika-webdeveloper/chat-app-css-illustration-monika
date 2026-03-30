import SendButton from "../images/SendButton.png";

const Input = () => {
  return (
    <div className='bg-white text-gray-300 text-[8px] font-normal leading-[120%] tracking-normal rounded-2xl py-1 pl-4 pr-2 flex justify-between items-center'>
      Type a message...
      <div className='w-5'>
        <img src={SendButton} alt='type button' className='' />
      </div>
    </div>
  );
};
export default Input;
