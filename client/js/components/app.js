import React from 'react'
import { connect } from 'react-redux'
import { loadApp } from '../actions/appActions'
import Header from './header'
import Quiz from './quiz'
import QuizScore from './quizScore'
import Footer from './footer'

class App extends React.Component {
    constructor(props)
    {
        super(props);

        setTimeout(() => {
            this.props.dispatch(loadApp());
        }, 2000);
    }

    render() {

        let content = null
        if (this.props.quizFinished) {
            content = <QuizScore/>
        } else {
            content = <Quiz/>
        }

        return <div className="container">
            <Header/>
            {content}
            <Footer/>
        </div>
    }
}

var mapStateToProps = function (state) {
    return {
        text : state.app.text,
        quizFinished : state.quiz.quizFinished === true
    }
}

export default connect(mapStateToProps)(App);