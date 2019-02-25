const brain = require("brain.js");
const network = new brain.NeuralNetwork()

network.train([
    {input: {height: 60, weight: 150}, output: {Adult: 1}},
    {input: {height: 45, weight: 68}, output: {Teenager: 0}},
    {input: {height: 72, weight: 175}, output: {Adult: 1}},
    {input: {height: 30, weight: 50}, output: {Teenager: 0}},
    {input: {height: 22, weight: 43}, output: {Kid: 2}},
])

const result = network.run({height: 20, weight: 55})
console.log(result);
