import React from 'react'
import { connect } from 'react-redux'
import { loadApp } from '../actions/appActions'
import Header from './header'
import Quiz from './quiz'
import Footer from './footer'

class App extends React.Component {
    constructor()
    {
        super();

        setTimeout(() => {
            this.props.dispatch(loadApp());
        }, 2000);
    }

    render() {
        return <div className="container">
            <Header/>
            <Quiz/>
            <Footer/>
        </div>
    }
}

var mapStateToProps = function (state) {
    return {
        text: state.app.text
    }
}

export default connect(mapStateToProps)(App);