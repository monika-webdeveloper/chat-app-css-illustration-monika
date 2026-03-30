import Header from "./components/Header";
import Message from "./components/Message";
import MessageOption from "./components/MessageOption";
import Input from "./components/Input";
import dog1 from "./images/dog-image-1.jpg";
import dog2 from "./images/dog-image-2.jpg";
import dog3 from "./images/dog-image-3.jpg";

const App = () => {
  return (
    <main className='flex relative py-[63.5px] px-8 overflow-hidden justify-center items-center lg:py-25 xl:py-[147.5px]'>
      <div className='w-127.5 h-254.5 gradient absolute right-50 -top-130  rounded-[255px] -z-1 sm:right-80 md:right-100 lg:right-190 lg:-top-95 xl:right-250 xl:-top-100 2xl:right-260 2xl:-top-80'></div>
      <div className='flex flex-col items-center gap-16 relative lg:flex-row xl:justify-center lg:gap-30'>
        <div className='w-61.75 h-126.25 bg-white rounded-[30px] p-[9.5px] shadow-2xl'>
          <div className='bg-gray-100 w-full h-full rounded-[20px] overflow-hidden border-l-2 border-r-2 border-b-2 border-purple-50 relative z-1 '>
            <div className='w-32.25 h-7.25 bg-white absolute rounded-bl-[14px] rounded-br-[14px] -top-3 left-12 z-2'></div>
            <Header />
            <div className='flex flex-col px-2 py-3 gap-4'>
              <div className='flex flex-col gap-2 w-33 text-purple-600 *:rounded-t-lg *:rounded-br-lg *:rounded-bl-sm'>
                <Message
                  text="That sounds great. I'd be happy with that."
                  className='bg-purple-50 p-2'
                />
                <Message
                  text='Could you send over some pictures of your dog, please?'
                  className='bg-purple-50 p-2'
                />
              </div>
              <div className='flex flex-col w-34 gap-2 self-end'>
                <div className='flex gap-2 *:rounded-lg'>
                  <img src={dog1} alt='dog sitting' />
                  <img src={dog2} alt='dog laying' />
                  <img src={dog3} alt='dog with a stick' />
                </div>
                <div className='flex flex-col flex-end gap-2 text-gray-500 *:rounded-t-lg *:rounded-bl-lg *:rounded-br-sm'>
                  <Message
                    text="Here are a few pictures. She's a happy girl!"
                    className='bg-white p-2 shadow-lg'
                  />
                  <Message
                    text='Can you make it?'
                    className='bg-white p-2 shadow-lg w-20 self-end'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Message
                  text='She looks so happy! The time we discussed works. How long shall I take her out for?'
                  className='w-31 bg-purple-50 p-2  text-purple-600 rounded-t-lg rounded-br-lg rounded-bl-sm'
                />
                <MessageOption option='30 minute walk' price='$29' />
                <MessageOption option='1 hour walk' price='$49' />
              </div>
              <Input />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 items-center lg:items-start'>
          {/* title */}
          <h1 className='text-purple-950 text-[40px] leading-[120%] tracking-normal font-medium'>
            Simple booking
          </h1>
          <p className='text-gray-500 text-base font-normal leading-[175%] tracking-normal text-center sm:w-111.25 lg:text-start xl:w-111.25 '>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </div>
      <div className='w-127.5 min-h-254.5 bg-linear-to-tr from-gradient-1 to-gradient-2 opacity-5 absolute rounded-[255px] -z-1 left-46 top-110 sm:left-80 sm:top-100 md:left-95 md:top-100 lg:left-200 lg:top-40 xl:left-280 xl:top-30 2xl:left-290'></div>
    </main>
  );
};
export default App;
