/*
Write a method that takes a game state as input
and returns a boolean of whether the game is complete or not.

Run this program using "node Question3" to see the Complete value.
*/

function Complete(game) {
    return GameState(game) === 'fully complete'
}

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

console.log('Complete', Complete(Board3))

export default Complete

