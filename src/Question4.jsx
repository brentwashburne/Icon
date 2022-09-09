/*
Provide a simplistic example UI that allows a player to make a guess
and evaluate their results
*/

import React, {useState} from 'react'

const Solution = 'WORDL'

function LetterState(letter, position) {
    if (!letter)
        return 'letter'
    if (letter === Solution.slice(position, position+1))
        return 'letter correct'
    return Solution.includes(letter) ? 'letter position' : 'letter incorrect'
}

function Wordle() {
    const [letters, setLetters] = useState([null, null, null, null, null])

    return (
        <div className='App'>
            <h1>Wordle</h1>
            <div>Click on each box and enter a letter</div>
            { letters.map((letter, position) =>
                <input value={letter}
                    className={LetterState(letter, position)}
                    onChange={(e) => {
                        letters[position] = e.target.value.slice(-1).toUpperCase()
                        setLetters([...letters])
                    }}
                />
            )}
            { (letters.join('') === Solution) && <h1>Complete!</h1> }
        </div>
    )
}

export default Wordle
