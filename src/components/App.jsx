import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';



export class App extends Component {
    state = {
      searchText: '',
  };

  handleSubmit = searchText => {
    this.setState({ searchText });
  };

render() {
        const { handleSubmit } = this;
        const { searchText } = this.state;
   return (
     <div className='App'
       
      style={{
        height: '100vh',
         display: 'flex',
         flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
     >
       
       <Searchbar onSubmit={handleSubmit} />
       <ImageGallery searchText={searchText}/>
       <ToastContainer />
    
    </div>
  );
}
};
