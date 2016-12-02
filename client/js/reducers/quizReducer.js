export default function reducer(state = {status: "", questions: []}, action) {
    switch (action.type) {
        case "GET_QUIZ": {
            return {
                status: "Loading",
                questions: []
            }
        }
        case "GET_QUIZ_FULFILLED": {
            console.log("GET_QUIZ_FULFILLED", action.payload)
            return {
                status: "Loaded",
                questions: action.payload
            }
        }
        case "GET_QUIZ_REJECTED": {
            return {
                status: "Error",
                questions: []
            }
        }
    }

    return state;
}