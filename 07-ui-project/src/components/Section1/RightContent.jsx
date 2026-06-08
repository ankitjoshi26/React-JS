import React from 'react';
import RightCard from './RightCard';

const RightContent = (props) => {
  // console.log(props);
  return (
    <div id='right' className='h-full w-2/3 flex flex-nowrap gap-8 p-3 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem,idx) {
        return <div key = {idx}>
          <RightCard id = {idx} img =  {elem.img} tag = {elem.tag} color = {elem.color}/>
        </div>
      })}
    </div>
  );
}

export default RightContent;
