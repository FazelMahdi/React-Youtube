import React from 'react';

class SerachBar extends React.Component {
    state = { term: '',};

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className="serach-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label > Serach Video </label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        )
    }
}

export default SerachBar; 