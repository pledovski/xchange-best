import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.saveSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('xChange', JSON.stringify({
      test: 'hello'
    }));
  }

  saveSettings() {
    let xChangeData = JSON.parse(localStorage.getItem('xChange'));
    if(!xChangeData) {
      return {
        page: 'settings',
        firstVisit: true
      }
    } else {
      return {

      }
    }
  }

  setPage = page => this.setState({page})

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}