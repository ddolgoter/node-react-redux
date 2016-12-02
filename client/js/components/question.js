import React from 'react'

class Question extends React.Component {
    render() {
        const answers = this.props.answers.map((a, i) => <li key={i}> {a} </li>)

        return <li>{ this.props.text }
            <ul>
                {answers}
            </ul>
        </li>
    }
}

export default Question