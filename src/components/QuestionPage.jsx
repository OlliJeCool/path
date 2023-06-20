import { Link, useNavigate } from "react-router-dom"

const QuestionPage = ({question}) => {
    const navigate = useNavigate();

    const handleClick = (option) => {
        if(!option.correct){
            alert("Špatná odpověď, zkus to znovu!")
        }
        else{
            if(question.id === 8){
                alert("Congratulations, you won!")
                localStorage.setItem(question.id, true)
            }
            else{
                navigate(`/${question.id+1}`)
                localStorage.setItem(question.id, true)
            }
        }
    }

  return (
    <div className="w-[100vw] h-[100vh] bg-primary text-white font-manrope p-3">
    <Link to="/">Exit</Link>
    <section className="w-full h-full bg-primary flex flex-col gap-10 items-center">
        <div className="max-w-[100%] max-h-[30%] flex justify-center items-center mt-5">
            <img className="w-full h-full" src={question.pic}></img>
        </div>
        <section className="flex flex-col justify-center gap-8">
        <h1 className="text-center text-lg">{question.question}</h1>
        <div className="flex flex-col gap-8 items-center justify-center">
            {question.options.map((option) => (
                <div className="w-[90%] h-16 bg-secondary rounded-md flex justify-center items-center" onClick={() => handleClick(option)}>
                    {option.answer}
                </div>
            ))}
        </div>
        </section>

    </section>
    </div>
  )
}

export default QuestionPage