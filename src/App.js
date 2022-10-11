import React from 'react'
import SearchBar from './components/SearchBar'


class App extends React.Component {

  onFormSubmit = term => {

  };
    render()  {
        return (
        <div className='ui container'>
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
      );
    }
}


export default App