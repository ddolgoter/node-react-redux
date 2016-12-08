import React from 'react'
import { connect } from 'react-redux'
import { getQuiz, selectPreviousQuestion, selectNextQuestion } from '../actions/quizActions'
import Question from './question';

class Quiz extends React.Component {
    componentWillMount() {
        this.props.dispatch(getQuiz());
    }

    nextQuestion() {
        this.props.dispatch(selectNextQuestion());
    }

    previousQuestion() {
        this.props.dispatch(selectPreviousQuestion());
    }

    render() {
        let status = this.props.status

        if (status !== 'Loaded')
            return <div className="loading">{status}</div>

        var question = this.props.questions[this.props.currentQuestionIdx]

        return <div className="loaded">
            <div className="container">
                <Question id={this.props.currentQuestionIdx}
                    text={question.text}
                    selectedAnswer={question.selectedAnswer}
                    answers={question.answers} />
            </div>
            <div className="container button-panel">
                <button className="btn button-default" onClick={this.previousQuestion.bind(this)}>Previous</button>
                <button className="btn button-default"  onClick={this.nextQuestion.bind(this)}>Next</button>
            </div>
        </div>;
    }
}

var mapStateToProps = function (state) {
    return {
        status: state.quiz.status,
        currentQuestionIdx: state.quiz.currentQuestionIdx,
        questions: state.quiz.questions
    }
}

export default connect(mapStateToProps)(Quiz);