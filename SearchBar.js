import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
    onIpChange=(event)=>{
        this.setState({term:event.target.value});
    };
    onFormSubmit= event=>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return <div className='search-bar ui segment'> <form onSubmit={this.onFormSubmit} className='ui form'>
        <label>Video Search</label>
        <input type='text' value={this.state.term}
        onChange={this.onIpChange}></input>
        </form>
        </div>;
    }
}

export default SearchBar;