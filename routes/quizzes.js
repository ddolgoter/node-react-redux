var sampleQuiz = [
    { text: "What color is the sky?", answers: ["Blue", "Cyan", "Green", "Red"] },
    { text: "Is tomato a fruit or a vegetable?", answers: ["Fruit", "Vegetable"] },
    { text: "What is the driest continent?", answers: ["Africa", "Australia", "Antarctica"] },
]

function getQuiz(req, res) {
    res.status(200).json(sampleQuiz)
}

module.exports.getQuiz = getQuiz