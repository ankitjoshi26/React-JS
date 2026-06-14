import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-10 text-white bg-blue-800 mt-3 font-bold'>
        <Link to='/product/men'>Men's Section</Link>
        <Link to='/product/women'>Women's Section</Link>
        <Link to='/product/kid'>Kid's Section</Link>
      </div>

      {/* for showing UI of men and women page */}
      {/* It renders the matching child route of a parent route or nothing if no child route matches. */}
      <Outlet />
    </div>
  );
};

export default Product;