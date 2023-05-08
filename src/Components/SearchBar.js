import React from 'react';
import '../App.css';

export function SearchBar(searchTerm, selectedLocation) {
  return (
    <form className='searchBar'>
      <div className="searchFilters">
        <button>Best Match</button>
        <button>Highest Rated</button>
        <button>Most Reviewed</button>
      </div>
      <div className='searchInputs'>
        <input id="searchTerms" type='text' placeholder="Terms"></input>
        <input id="selectedLocation" type='text' placeholder="location"></input>
      </div>
      <button className="searchButton">Search</button>
    </form>
  )
}