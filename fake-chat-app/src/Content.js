import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    },

]

function Content() {
    
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleLessonEvent = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleLessonEvent)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleLessonEvent)
        }
    }, [lessonId])
    return(
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                    style={{
                        color: lessonId === lesson.id ?
                        'red' : '#333'
                    }}
                    key={lesson.id}
                    onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;