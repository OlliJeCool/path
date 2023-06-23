import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import ProgressBar from "./ProgressBar";

const QuestionPage = ({ question }) => {
    const navigate = useNavigate();

    const config = {
        angle: "90",
        spread: "120",
        startVelocity: "32",
        elementCount: "30",
        dragFriction: "0.23",
        duration: "2450",
        stagger: 3,
        width: "8px",
        height: "8px",
        perspective: "496px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      };

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

                var count = 0
                for (let i = 1; i <= 8; i++) {
                    if (localStorage.getItem(i) === 'true') count++
                }
                if (count === 8) {
                    toast.success("Gratulujeme, odpověděli jste správně na všechny otázky!", {style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      }, duration: 6000})
                }
            }
            else{
                toast.error("Špatná odpověď.", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                      duration: 1500
                })
            }
        }


    }

    return (
        <div className="flex justify-center w-full text-white">
            <Toaster
            position="top-center" />
            <div className="py-5">
                <div className="w-[90vw] bg-primary text-white font-manrope p-3">
                    <div className="flex justify-evenly items-center">
                        <Link to="/">Home</Link>
                        <ProgressBar />
                        <div>
                            <Link to={`/${question.id != 8 ? question.id + 1 : ""}`}>Další</Link>
                        </div>
                    </div>
                    <section className="w-full bg-primary flex flex-col gap-10 items-center">
                        <div className="max-w-[100%] max-h-[30%] flex justify-center items-center mt-5">
                            <img className="w-full h-full" src={question.pic}></img>
                        </div>
                        <section className="flex flex-col justify-center gap-8 w-[100%]">
                            <h1 className="text-center text-lg">{question.question}</h1>
                            <div className="flex flex-col gap-8 items-center justify-center">
                                {question.options.map((option) => (
                                    <div className={`w-[90%] h-16 bg-secondary rounded-md flex flex-col justify-center items-center ${isAnswered && option.correct ? 'correct-gradient' : ''} ${clicked === option.answer ? option.correct ? 'correct-gradient' : 'incorrect-gradient' : ''}`} onClick={() => handleClick(option)}>
                                        <Confetti active={isAnswered} config={config} />
                                        {option.answer}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default QuestionPage