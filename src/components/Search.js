import React, { useState } from "react";

function Search({onSearchChange, onSortChange, sorting}) {

  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearchChange(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
      <input checked={sorting} onChange={onSortChange} type='checkbox'/>
    </form>
  );
}

export default Search;
