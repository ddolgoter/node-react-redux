export default function reducer(state = { text: "No Text" },
    action) {
    switch (action.type) {
        case 'LOAD_APP': {
            return { text: action.payload }
        }
    }

    return state
}