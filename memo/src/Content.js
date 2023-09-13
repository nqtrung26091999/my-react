import { memo } from "react";

function Content(props) {
    console.log("re-render")
    return(
        <div>
            <h2>Hello</h2>
            <button onClick={props.onIncrease}>Click me!</button>
        </div>
    )
}

export default memo(Content)