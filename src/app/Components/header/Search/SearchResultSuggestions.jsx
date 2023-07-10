import React from 'react'
import './SearchResultSuggestion.css';
import SearchResultSingleItmeClick from './SearchResultSingleItmeClick';

const SearchResultSuggestions = ({resultSuggestion}) => {
  return (
    <div className='result-list'>
    {
        resultSuggestion.map((productName,i)=>{
              return(
                  <SearchResultSingleItmeClick productName={productName} key={i} />
              )
        })
    }
    </div>
  )
}

export default SearchResultSuggestions
