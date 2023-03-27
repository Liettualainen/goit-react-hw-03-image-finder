import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
    state = {
        searchText: '',
    };

    handleChange = event => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value.toLowerCase();
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.searchText.trim() === '') {
      toast('No data');
      return;
    }
    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };
    
    render() {
        const { searchText } = this.state;
        const { handleChange, handleFormSubmit} = this;
        
        return (
                <header class="searchbar" className="Searchbar">
                    <form class="form" className="SearchForm" onSubmit={handleFormSubmit}>
                    <button type="submit" class="button" className="SearchForm-button">
                        <FaSearch size='80%' />
                        <span class="button-label" className="SearchForm-button-label"></span>
                    </button>   
                        <input 
                            class="input"
                            className="SearchForm-input"
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                            name='searchText'
                            value={searchText}
                            onChange={handleChange}
                        />
                    </form>
            </header>
        )
    }
}


export default Searchbar;












// user_id:30904237 ip key 30904237-89ef4380cd88db989fbe73792


// 	var API_KEY = '30904237-89ef4380cd88db989fbe73792';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });