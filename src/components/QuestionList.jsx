import { Link, useNavigate } from "react-router-dom"
import pathQuestions from "../constants"

const QuestionList = () => {
    const navigate = useNavigate();
    
    const handleClick = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div className='w-[100vw] h-[100vh] bg-primary flex flex-col items-center justify-center p-3 gap-9'>
            {pathQuestions.map((question) => (
                <div className="flex justify-center items-center bg-secondary rounded-md h-[50px] w-full text-white" key={question.id} onClick={() => handleClick(question.id)}>
                    {question.id}
                </div>
            ))}
        </div>
  )
}

export default QuestionList