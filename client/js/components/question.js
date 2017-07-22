import React from 'react'
import { connect } from 'react-redux'
import { selectAnswer } from '../actions/quizActions'

class Question extends React.Component {

    selectAnswer(index) {
        console.log("answer selected " + index);
        this.props.dispatch(selectAnswer(this.props.id, index));
    }

    render() {
        const answers = this.props.answers.map((answer, index) => {
            let answerClasses = index === this.props.selectedAnswer ? 'answer selected' : 'answer'

            return <li key={index} id={index}
                className="col-md-6">
                <div className={answerClasses} onClick={this.selectAnswer.bind(this, index) }>{answer.text}</div>
            </li>
        })

        return <div>
            <div className="question row">{ this.props.text }</div>
            <ul className="row">
                {answers}
            </ul>
        </div>
    }
}

var mapStateToProps = function (state) {
    return {
    }
}

export default connect(mapStateToProps)(Question);