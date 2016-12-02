import React from 'react'
import { connect } from 'react-redux'
import { loadApp } from '../actions/appActions'

class App extends React.Component {
    constructor()
    {
        super();

        setTimeout(() => {
            this.props.dispatch(loadApp());
        }, 2000);
    }

    render() {
        return <p>{this.props.text}</p>;
    }
}

var mapStateToProps = function (state) {
    console.log(state);
    return {
        text: state.app.text
    }
}

export default connect(mapStateToProps)(App);