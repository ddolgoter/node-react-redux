import React from 'react'
import { connect } from 'react-redux'

export class QuizScore extends React.Component {
    render() {
        return <div className="footer">
            <h3>Quiz Finished</h3>
            <h2>Your score is: {this.props.score} out of {this.props.maxScore}</h2>
        </div>
    }
}


var mapStateToProps = function (state) {
    return {
        score : state.quiz.quizScore,
        maxScore : state.quiz.maxScore
    }
}

export default connect(mapStateToProps)(QuizScore);