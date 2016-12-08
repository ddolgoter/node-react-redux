import React from 'react'
import { connect } from 'react-redux'
import { getQuiz, selectPreviousQuestion, selectNextQuestion } from '../actions/quizActions'
import Question from './question';

class Quiz extends React.Component {

    constructor(props) {
        super(props);       
    }

    componentWillMount() {
        this.props.dispatch(getQuiz());
    }

    nextQuestion() {
        this.props.dispatch(selectNextQuestion());
    }

    previousQuestion() {
        this.props.dispatch(selectPreviousQuestion());
    }

    currentQuestion() {
        return this.props.questions[this.props.currentQuestionIdx]
    }

    buttonPreviousClasses() {
        let classes = "btn button-default";

        if (this.props.currentQuestionIdx === 0)
            classes = classes + " disabled";

        return classes;
    }

    buttonNextClasses() {
        let classes = "btn button-default";

        if (this.props.currentQuestionIdx === this.props.questions.length - 1 ||
            this.currentQuestion().selectedAnswer === undefined)
            classes = classes + " disabled";

        return classes;
    }

    render() {
        let status = this.props.status

        if (status !== 'Loaded')
            return <div className="loading">{status}</div>

        let question = this.currentQuestion();

        return <div className="loaded">
            <div className="container">
                <Question id={this.props.currentQuestionIdx}
                    text={question.text}
                    selectedAnswer={question.selectedAnswer}
                    answers={question.answers} />
            </div>
            <div className="container button-panel">
                <button className={this.buttonPreviousClasses()} onClick={this.previousQuestion.bind(this) }>Previous</button>
                <button className={this.buttonNextClasses()}  onClick={this.nextQuestion.bind(this)}>Next</button>
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