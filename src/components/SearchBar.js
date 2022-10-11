import React from 'react'


class SearchBar extends React.Component {

    state = { term: ''};

    onInputChange = e => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = e =>{
        e.preventDefault();
    };


        render() {
            return (
            <div className=' search-bar ui segment'>
                <form className='ui form'>
                    <div onSubmit={this.onFormSubmit} className="field">
                        <label >Video Search</label>
                        <input 
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

SearchBar.propTypes = {

}

export default SearchBar
