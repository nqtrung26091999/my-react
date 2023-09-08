import userEvent from "@testing-library/user-event";
import { type } from "@testing-library/user-event/dist/type";
import { useState, useEffect } from "react";
    
    // 1. userEffect(callBack)
    // - Goi callback moi khi component re-render
    // - Goi callback sau khi component them element vao DOM
    // 2. userEffect([])
    // - Chi goi callback 1 lan sau khi component mounted
    // 3. userEffect([deps])
    // - Callback se duoc goi lai sau khi deps thay doi

//-------------------
// 1. Callback luon duoc goi khi component re-render
const types = ["posts", "comments", "albums"]

function Content() {
    const [type, setType] = useState('posts')
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [showButton, setShowButton] = useState(false)
    const [resize, setResize] = useState(window.innerWidth)

    useEffect(() => {
        document.title = title
    })
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
        .then((res => res.json()))
        .then(posts => {
            setPosts(posts)
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // if(window.scrollY >= 200) {
            //     setShowButton(true)
            // } else {
            //     setShowButton(false)
            // }
            setShowButton(window.scrollY >= 200)
        }
        window.addEventListener("scroll", handleScroll)
        console.log('Mounted')

        return () => {
            // window.removeEventListener("scroll", handleScroll)
            console.log('Unmounted')
        }
    })

    useEffect(() => {
        const handleResize = () => {
            setResize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
    })

    return(
        <div>
            <h2>{resize}</h2>
            {types.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {/* <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /> */}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.name || post.title}</li>
                ))}
            </ul>
            {showButton &&
            <button
                style={{
                    position: "fixed",
                    right: 20,
                    bottom: 20
                }}
            >
            Go to top    
            </button>}
        </div>
    )
}

export default Content;