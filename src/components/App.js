import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { post } from "./common";

function App() {
  const [page, setPage] = useState("List");
  const [quizes, setQuizes] = useState([]);
  const url = "http://localhost:4000/questions";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizes(data));
  }, []);
  const submitQuiz = (quiz) => {
    quiz.id = quizes.length+1;
    console.log(quiz);
    setQuizes([...quizes, quiz]);
    post("POST", url, quiz);
    console.log(quizes);
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onQuizSubmit={submitQuiz} />
      ) : (
        <QuestionList quizes={quizes} />
      )}
    </main>
  );
}

export default App;
