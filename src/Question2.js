/*
Using your favorite model from Question 1, Write a method
that takes a guess as input and returns the game state.

Run this program using "node Question2" to see the game states.
*/

const State = {
    Empty: 'E',
    Incorrect: 'I',
    IncorrectPosition: 'P',
    Correct: 'C'
}

function GameState(board) {
    const state = board.position.reduce((state, position) => {
        state[position.state] = state[position.state] ? state[position.state] + 1 : 1
        return state
    }, {})
    if (state[State.Empty] === 5) return 'empty'
    if (state[State.Correct] === 5) return 'fully complete'
    return 'partially complete'
}

const Board1 = {
    position: [
        {letter: null, state: State.Empty},
        {letter: null, state: State.Empty},
        {letter: null, state: State.Empty},
        {letter: null, state: State.Empty},
        {letter: null, state: State.Empty}
    ],
    state: 'empty'
}
const Board2 = {
    position: [
        {letter: 'W', state: State.Correct},
        {letter: 'E', state: State.Incorrect},
        {letter: 'A', state: State.Incorrect},
        {letter: 'R', state: State.IncorrectPosition},
        {letter: 'Y', state: State.Incorrect}
    ],
    state: 'partially complete'
}
const Board3 = {
    position: [
        {letter: 'W', state: State.Correct},
        {letter: 'O', state: State.Correct},
        {letter: 'R', state: State.Correct},
        {letter: 'D', state: State.Correct},
        {letter: 'L', state: State.Correct}
    ],
    state: 'fully complete'
}

console.log('Board1', GameState(Board1))
console.log('Board2', GameState(Board2))
console.log('Board3', GameState(Board3))
