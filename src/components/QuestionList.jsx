import { Link, useNavigate } from "react-router-dom"
import pathQuestions from "../constants"

const QuestionList = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div className="flex justify-center items-center my-8 font-manrope text-white">
            <div className=" w-[85%]">
                <div className="max-w-[100%] max-h-[30%] flex justify-center items-center">
                    <img className="w-full h-full" src={'one.png'}></img>
                </div>
                {/* <div className='text-xl text-center mt-5 mb-5'>Satalická rádiovka</div> */}
                <div className="flex justify-center">
                    <div className='w-[90%] bg-primary flex flex-col items-center justify-center px-3 mt-5 gap-5'>
                        {pathQuestions.map((question) => (
                            <div className={`flex justify-center items-center bg-secondary rounded-md h-10 w-full text-white ${localStorage.getItem(question.id) === 'true' ? 'correct-gradient' : ''}`} key={question.id} onClick={() => handleClick(question.id)}>
                                {question.id}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionList