import React from 'react'
import { connect } from 'react-redux'
import { getQuiz } from '../actions/quizActions'
import Question from './question';

class Quiz extends React.Component {
    componentWillMount() {
        this.props.dispatch(getQuiz());
    }

    render() {
        return <div>
            <p>{ this.props.status } {this.props.questions.length}</p>
            <ul>{ this.props.questions }</ul>
        </div>;
    }
}

var mapStateToProps = function (state) {
    return {
        status: state.quiz.status,
        questions: state.quiz.questions.map((q, i) => <Question key={i} text={q.text} answers={q.answers} />)
    }
}

export default connect(mapStateToProps)(Quiz);