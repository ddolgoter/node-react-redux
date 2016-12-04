export default function reducer(state = {status: "", questions: []}, action) {
    switch (action.type) {
        case "GET_QUIZ" : {
            return {
                status: "Loading",
                questions: []
            }
        }
        case "GET_QUIZ_FULFILLED" : {
            return {
                status: "Loaded",
                questions: action.payload
            }
        }
        case "GET_QUIZ_REJECTED" : {
            return {
                status: "Error",
                questions: []
            }
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
    }

    return state;
}