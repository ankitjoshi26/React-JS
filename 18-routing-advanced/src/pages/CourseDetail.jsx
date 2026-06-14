import React from 'react';
import {useParams} from 'react-router-dom';

const CourseDetail = () => {

    // used to get parameter from url
    const params = useParams();
    console.log(params);
    console.log(params.id);

  return (
    <div>
      <h1>course detail page </h1>
    </div>
  );
}

export default CourseDetail;
