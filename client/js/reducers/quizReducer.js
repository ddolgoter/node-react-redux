export default function reducer(state = {status: "", questions: []}, action) {
    switch (action.type) {
        case "GET_QUIZ": {
            return Object.assign({}, state, {
                status: "Loading",
            })
        }
        case "GET_QUIZ_FULFILLED" : {
            return Object.assign({}, state, {
                status: "Loaded",
                questions: action.payload,
                currentQuestionIdx: 0
            })
        }
        case "GET_QUIZ_REJECTED" : {
            return Object.assign({}, state, {
                status: "Error",
            })
        }
        case "SELECT_ANSWER" : {
            let newState = Object.assign({}, state);
            newState.questions = state.questions.map((question, index) => {
                if (index === action.payload.questionId) {
                    return Object.assign({}, question, {
                        selectedAnswer: action.payload.answerId
                    })
                }

                return question;
            })

            console.log(newState);
            return newState
        }
        case "SELECT_NEXT_QUESTION": {
            //can't move next from last question
            if (state.currentQuestionIdx === state.questions.length - 1)
                return state;

            return Object.assign({}, state, {
                currentQuestionIdx: state.currentQuestionIdx + 1
            })
        }
        case "SELECT_PREVIOUS_QUESTION": {

            //can't move back from first question
            if (state.currentQuestionIdx === 0)
                return state;

            return Object.assign({}, state, {
                currentQuestionIdx: state.currentQuestionIdx - 1
            })
        }
    }

    return state;
}