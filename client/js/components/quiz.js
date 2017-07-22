import React from 'react'
import { connect } from 'react-redux'
import { getQuiz, selectPreviousQuestion, selectNextQuestion, finishQuiz } from '../actions/quizActions'
import Question from './question';

class Quiz extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(getQuiz())
    }

    nextQuestion() {
        this.props.dispatch(selectNextQuestion())
    }

    previousQuestion() {
        this.props.dispatch(selectPreviousQuestion())
    }

    finishQuiz(){
        this.props.dispatch(finishQuiz())
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

        if (this.currentQuestion().selectedAnswer === undefined)
            classes = classes + " disabled";

        return classes;
    }

    render() {
        let status = this.props.status

        if (status !== 'Loaded')
            return <div className="loading">{status}</div>

        let secondButton = <button className={this.buttonNextClasses()}  onClick={this.nextQuestion.bind(this)}>Next</button>
        if (this.props.lastQuestion) {
            secondButton = <button className={this.buttonNextClasses()}  onClick={this.finishQuiz.bind(this)}>Finish</button>
        } 

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
                {secondButton}
            </div>
        </div>;
    }
}

var mapStateToProps = function (state) {
    return {
        status: state.quiz.status,
        currentQuestionIdx: state.quiz.currentQuestionIdx,
        questions: state.quiz.questions,
        lastQuestion: state.quiz.lastQuestion
    }
}

export default connect(mapStateToProps)(Quiz);