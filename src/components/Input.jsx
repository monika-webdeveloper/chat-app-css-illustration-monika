import SendButton from "../images/SendButton.png";

const Input = () => {
  return (
    // <div className='bg-white text-gray-300 text-[8px] font-normal leading-[120%] tracking-normal rounded-2xl py-1 pl-4 pr-2 flex justify-between items-center'>
    //   <div className='w-5'>
    //     <img src={SendButton} alt='type button' className='' />
    //   </div>
    // </div>

    <div className='bg-white text-gray-300 text-[8px] font-normal leading-[120%] tracking-normal rounded-2xl py-1 pl-4 pr-2 flex justify-between items-center'>
      <label htmlFor='message'>
        <input
          type='text'
          placeholder='Type a message'
          required
          id='message'
          name='message'
          aria-label='Type a message'
        />
      </label>
      <button className='w-5' type='button' aria-label='Send message'>
        <img src={SendButton} alt='send button' />
      </button>
    </div>
  );
};
export default Input;
