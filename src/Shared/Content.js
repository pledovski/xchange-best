import React from 'react';
import {AppContext} from '../App/AppProvider';

export default (props) => {
  return <AppContext.Consumer>
    {({coinList}) => {
      if(!coinList) {
        return <div>Loading coins ...</div>
      } else {
        return <div>{props.children}</div>
      }
    }}
  </AppContext.Consumer>
}