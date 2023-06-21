import { Link, useNavigate } from "react-router-dom"
import pathQuestions from "../constants"
import { useEffect } from "react";

const QuestionList = () => {
    const navigate = useNavigate();

    useEffect(() => {
        var updateTime = localStorage.getItem('updateTime');
        var updateDate = new Date()
        updateDate.setTime(updateTime)

        var currentTime = new Date()

        var timeDiffrence = currentTime.getTime() - updateDate.getTime()
        var hoursDifference = timeDiffrence / (1000 * 60 * 60)

        if (hoursDifference > 12) {
            pathQuestions.forEach(question => localStorage.setItem(question.id, false))
        }

    })

    const handleClick = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div className="flex justify-center items-center font-manrope text-white h-[100vh]">
            <div className='w-[85%] bg-primary flex flex-col items-center justify-center px-3 mt-5 gap-5'>
                {pathQuestions.map((question) => (
                    <div className={`flex justify-center items-center bg-secondary rounded-md h-14 w-full text-white ${localStorage.getItem(question.id) === 'true' ? 'correct-gradient' : ''}`} key={question.id} onClick={() => handleClick(question.id)}>
                        {question.id}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default QuestionList