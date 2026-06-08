import React from 'react';
import {ArrowRight} from 'lucide-react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
    // console.log(props);
  return (
    <div className='h-full shrink-0 w-60 rounded-4xl overflow-hidden relative'>
      <img className='object-cover h-full w-full absolute' src = {props.img} alt=""/>
      
      <RightCardContent id = {props.id} tag = {props.tag} color = {props.color}/>
    </div>
  );
}

export default RightCard;
