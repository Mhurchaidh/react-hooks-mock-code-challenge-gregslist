import React from "react";
import Search from "./Search";

function Header({onSearchChange, onSortChange, sorting}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={onSearchChange} onSortChange={onSortChange} sorting={sorting}/>
    </header>
  );
}

export default Header;
