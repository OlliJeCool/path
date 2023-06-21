import { Route, Router, Routes } from "react-router-dom"
import QuestionList from "./components/QuestionList"
import QuestionPage from "./components/QuestionPage"
import pathQuestions from "./constants"
import { useState } from "react"

function App() {
  return (
      <Routes>
         <Route path='/' element={<QuestionList/>} />
         {pathQuestions.map((question) => (
          <Route path={`${question.id}`} element={<QuestionPage question={question}/>} />
         ))}
      </Routes>
  )
}

export default App
