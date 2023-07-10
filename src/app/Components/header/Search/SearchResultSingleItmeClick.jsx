import React from 'react';
import Link from 'next/link';

const SearchResultSingleItmeClick = ({productName,i}) => {
  return (
    <div>
      <Link href={`../productDetails/${productName._id}`}>
            <div className='hover:bg-slate-200 cursor-pointer' key={i}>{productName.productName}</div>
      </Link>  
    </div>
  )
}

export default SearchResultSingleItmeClick
