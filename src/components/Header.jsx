import path from "../images/Path.png";
import dots from "../images/dots.png";
import avatar from "../images/avatar.jpg";

const Header = () => {
  return (
    <div className='w-full h-16.5 flex gradient p-4 rounded-b-md relative'>
      <div className='flex w-full justify-between items-end'>
        <div className='flex gap-2'>
          <div className='w-1 h-2.5 flex self-center'>
            <img src={path} alt='' aria-hidden='true' />
          </div>
          <div className='flex gap-2'>
            <div className='w-6 h-6'>
              <img
                src={avatar}
                alt='user oval photo'
                className='rounded-full border border-white'
              />
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-[11px] leading-[120%] font-medium tracking-normal text-white'>
                Samuel Green
              </p>
              <p className='text-purple-300 text-[8px] font-medium leading-[120%] tracking-normal'>
                Available to Walk
              </p>
            </div>
          </div>
        </div>
        <div className='w-0.75 h-3'>
          <img src={dots} alt='' aria-hidden='true' />
        </div>
      </div>
    </div>
  );
};
export default Header;
