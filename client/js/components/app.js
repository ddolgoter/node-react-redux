import React from 'react'
import { connect } from 'react-redux'
import { loadApp } from '../actions/appActions'
import Quiz from './quiz'

class App extends React.Component {
    constructor()
    {
        super();

        setTimeout(() => {
            this.props.dispatch(loadApp());
        }, 2000);
    }

    render() {
        return <div>
            <p>{this.props.text}</p>
            <Quiz/>
        </div>
    }
}

var mapStateToProps = function (state) {
    return {
        text: state.app.text
    }
}

export default connect(mapStateToProps)(App);