import { useState, useEffect } from "react";

function Content() {

    // const [countDown, setCountDown] = useState(180);

    // useEffect(() => {
    //     const timeId = setInterval(() => {
    //         setCountDown(prevState => prevState - 1)
    //         console.log("coundown");
    //     }, 1000)

    //     return () => clearInterval(timeId)
    // }, [])

    const [image, setImage] = useState()

    useEffect(() => {
        return() => {
           image && URL.revokeObjectURL(image.preview)
        }
    }, [image])

    const handleChooseFile = e => {
        const fileImage = e.target.files[0]
        fileImage.preview = URL.createObjectURL(fileImage)
        setImage(fileImage)
    }

    return(
        <div>
            {/* <h2>{countDown}</h2> */}
            <input
                type="file"
                onChange={handleChooseFile}
            />
            {image && (<img
                height={300}
                src={image.preview}
                alt=""
            />)}
        </div>
    )
}

export default Content;