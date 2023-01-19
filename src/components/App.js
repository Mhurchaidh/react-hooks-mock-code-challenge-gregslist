import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {

  const [listingArray, setListingArray] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then((listing) => setListingArray(listing))
  }, [])

  const onDeleteListing = (id) => {
    const newListingArray = listingArray.filter(listing => listing.id !== id);
    setListingArray(newListingArray);
  }

  const onSearchChange = (value) => {
    setSearchValue(value);
  }

  const onSortChange = () => {
    setSorting(!sorting);
  }

  const onAddListing = (listingObj) => {
    setListingArray([...listingArray, listingObj]);
  }

  const listingsToDisplay = [...listingArray]
  .sort((listingA, listingB) => sorting? listingA.location.localeCompare(listingB.location) : true)
  .filter(listing => listing.description.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="app">
      <Header onSearchChange={onSearchChange} onSortChange={onSortChange} sorting={sorting}/>
      <ListingForm onAddListing={onAddListing}/>
      <ListingsContainer listings={listingsToDisplay} onDeleteListing={onDeleteListing}/>
    </div>
  );
}

export default App;
