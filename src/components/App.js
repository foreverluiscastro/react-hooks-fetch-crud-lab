import React, { useState , useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((r) => r.json())
    .then((r) => setQuestions(r))
  }, [])

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
    setPage("List")
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedList = questions.filter((question) => question.id != deletedQuestion.id)
    setQuestions(updatedList)
  }

  function handleUpdateQuestion(updatedQuestion) {
    const updatedList = questions.map((question) => {
      if (question.id === updatedQuestion.id) return updatedQuestion
      return question
    })
    console.log(updatedQuestion, "should be included in", updatedList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
