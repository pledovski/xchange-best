import React from 'react';
import styled from 'styled-components';
import {purpleBackgroundColor, darkTileBackground, fontSize2, color5} from '../Shared/Styles';
import {AppContext} from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`
const SearchInput = styled.input`
  ${darkTileBackground}
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  place-self: center left;
  color: ${color5};
`

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  // Get all the coin symbols
  let coinSymbols = Object.keys(coinList);
  // Get all the coin names and map symbol to name
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
  let allStringsToSearch = coinSymbols.concat(coinNames);
  // console.log(allStringsToSearch)
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
      let coinName = result.CoinName;
      return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
    });
    
    setFilteredCoins(filteredCoins);
}, 500)

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if(!inputValue) {
    setFilteredCoins(null);
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({setFilteredCoins, coinList}) => 
        <SearchGrid>
          <h2>Search your coin</h2>
          <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
        </SearchGrid>
      }
    </AppContext.Consumer>
  );
}
