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
            <div className="container">{ this.props.questions }</div>
        </div>;
    }
}

var mapStateToProps = function (state) {
    return {
        status: state.quiz.status,
        questions: state.quiz.questions.map((question, index) =>
            <Question key={index} text={question.text} answers={question.answers} />)
    }
}

export default connect(mapStateToProps)(Quiz);