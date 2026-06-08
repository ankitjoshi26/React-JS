import React from 'react';
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className= 'h-full absolute top-0 left-0  w-full p-6 flex flex-col justify-between'>
        <h1 className='bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl font-semi bold'>{props.id+1}</h1>
        <div>
            <p className='leading-normal text-white mb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero molestias voluptates? Reiciendis, officia laudantium!</p>

            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-5 py-2 rounded-full text-gray-200'>{props.tag}</button>
                <button className=' text-white font-semibold px-3 py-2 rounded-full'><ArrowRight size={20}/></button>
            </div>
        </div>
      </div>
  );
}

export default RightCardContent;