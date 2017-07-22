"use strict"

var sampleQuiz = [
    { text: "What color is the sky?", answers: [{ text: "Blue", score: 1 }, { text: "Beige" }, { text: "Green" }, { text: "Red" }] },
    { text: "Is tomato a fruit or a vegetable?", answers: [{ text: "Fruit", score: 1 }, { text: "Vegetable" }] },
    { text: "What is the driest continent?", answers: [{ text: "Africa" }, { text: "Australia" }, { text: "Antarctica", score: 1 }] },
]

function getQuiz(req, res) {
    res.status(200).json(sampleQuiz)
}

module.exports.getQuiz = getQuiz