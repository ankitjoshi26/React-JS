import React from 'react';

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
          <div className='h-50 w-55 rounded-xl overflow-hidden'>
            <img className='h-full w-full rounded-xl object-cover' src= {props.elem.download_url} alt="images" />
          </div>
          <h2 className='text-center font-bold text-lg mt-1'>{props.elem.author}</h2>
        </a>
    </div>
  );
}

export default Card;
