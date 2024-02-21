import React from "react";

function QuestionList({quizes}) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          /* display QuestionItem components here after fetching */
          quizes.map((quiz) => (
            <li key={quiz.id}>{quiz.prompt}
            <button className="dlt">DELETE</button>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default QuestionList;
