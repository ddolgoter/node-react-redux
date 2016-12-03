import React from 'react'

class Question extends React.Component {
    render() {
        const answers = this.props.answers.map((answer, index) => <li key={index} className="col-md-6">
            <div className="answer">{answer}</div>
        </li>)

        return <div>
            <div className="question row">{ this.props.text }</div>
            <ul className="row">
                {answers}
            </ul>
        </div>
    }
}

export default Question