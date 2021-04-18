import { useState } from 'react'

function App({ myProps }) {
    // {myprops} = props
    const [cells, setCells] = useState(Array(9).fill('%'))
    const [turns, setTurns] = useState(1)

    const chooseSymbol = (index) => {
        if (cells[index] !== '%') return
        const currentCells = [...cells]
        const symbolToUpdate = turns % 2 ? 'X' : 'O'
        setTurns((prev) => prev + 1)
        currentCells[index] = symbolToUpdate
        setCells(currentCells)
    }

    const computeResult = () => {
        // Game logic goes here
        // gamelogic
        /**
         *
         *
         */
        if (turns > 9) return 'Game Draw'
        return turns % 2 ? "X's turn" : "O's turn"
    }

    return (
        <div>
            <div className="App">
                <h1>Tic Tac Toe</h1>
                <h2>{computeResult()}</h2>
                <div>
                    <XOComponent
                        value={cells[0]}
                        updateValue={chooseSymbol}
                        index={0}
                    />
                    <XOComponent
                        value={cells[1]}
                        updateValue={chooseSymbol}
                        index={1}
                    />
                    <XOComponent
                        value={cells[2]}
                        updateValue={chooseSymbol}
                        index={2}
                    />
                </div>
                <div>
                    <XOComponent
                        value={cells[3]}
                        updateValue={chooseSymbol}
                        index={3}
                    />
                    <XOComponent
                        value={cells[4]}
                        updateValue={chooseSymbol}
                        index={4}
                    />
                    <XOComponent
                        value={cells[5]}
                        updateValue={chooseSymbol}
                        index={5}
                    />
                </div>
                <div>
                    <XOComponent
                        value={cells[6]}
                        updateValue={chooseSymbol}
                        index={6}
                    />
                    <XOComponent
                        value={cells[7]}
                        updateValue={chooseSymbol}
                        index={7}
                    />
                    <XOComponent
                        value={cells[8]}
                        updateValue={chooseSymbol}
                        index={8}
                    />
                </div>
                <button
                    onClick={() => {
                        setCells(Array(9).fill('%'))
                        setTurns(1)
                    }}
                >
                    Start Again
                </button>
            </div>
        </div>
    )
}

const XOComponent = ({ value, updateValue, index }) => {
    return <button onClick={() => updateValue(index)}>{value}</button>
}

export default App

/**
 *  - create a XOComponent 
 - That is basically a button
 - If nothing is clicked , display empty
 - one first click it becomes X
 - second click it becomes O, and next click it toggles to X
- Create a 3x3 grid of the XOComponents
- use basic HTML CSS to build this out
 */
