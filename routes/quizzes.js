var sampleQuiz = [
    { text: "What color is the sky?", answers: ["Blue", "Cyan", "Green", "Red"] },
    { text: "Is the tomato a fruit?", answers: ["Yes", "No"] },
    { text: "What is the dryest continent?", answers: ["Africa", "Australia", "The Antarctic"] },
]

function getQuiz(req, res) {
    res.status(200).json(sampleQuiz)
}

module.exports.getQuiz = getQuiz