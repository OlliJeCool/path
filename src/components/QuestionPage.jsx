import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const QuestionPage = ({ question }) => {
    const navigate = useNavigate();

    const [clicked, setClicked] = useState('')
    const [isAnswered, setIsAnswered] = useState(false)

    useEffect(() => {
        if (localStorage.getItem(question.id) === 'true') {
            setIsAnswered(() => true)
        }
        else setIsAnswered(() => false)
    })

    const handleClick = (option) => {

        if (localStorage.getItem(question.id) !== 'true') {
            setClicked(() => option.answer)

            if (option.correct) {
                localStorage.setItem(question.id, true)
                localStorage.setItem('updateTime', Date.now(0))
            }
        }


    }

    return (
        <div className="flex justify-center p-5">
            <div className="w-[90vw] bg-primary text-white font-manrope p-3">
                <div className="px-1">
                    <Link to="/">Home</Link>
                    <div className=' float-right' hidden={question.id === 8}>
                        <Link to={`/${question.id + 1}`}>Další</Link>
                    </div>
                </div>
                <section className="w-full bg-primary flex flex-col gap-10 items-center">
                    <div className="max-w-[100%] max-h-[30%] flex justify-center items-center mt-5">
                        <img className="w-full h-full" src={'one.png'}></img>
                    </div>
                    <section className="flex flex-col justify-center gap-8 w-[100%]">
                        <h1 className="text-center text-lg">{question.question}</h1>
                        <div className="flex flex-col gap-8 items-center justify-center">
                            {question.options.map((option) => (
                                <div className={`w-[90%] h-16 bg-secondary rounded-md flex justify-center items-center ${isAnswered && option.correct ? 'correct-gradient' : ''} ${clicked === option.answer ? option.correct ? 'correct-gradient' : 'incorrect-gradient' : ''}`} onClick={() => handleClick(option)}>
                                    {option.answer}
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default QuestionPage