import reducer from "./reducer";

function logger(reducer) {
    return(prevState, aciton) => {
        console.group(aciton.type)
        console.log("Prev State: ", prevState)
        
        const nextState = reducer(prevState, aciton)
        console.log("Next State: ", nextState)
        console.groupEnd()
        return nextState
    }
}
export default logger