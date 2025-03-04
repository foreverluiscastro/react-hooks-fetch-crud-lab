import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ questions , onDeleteQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {/* display QuestionItem components here after fetching */}
      {questions.map((question) => <QuestionItem question={question} onDeleteQuestion={onDeleteQuestion}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
