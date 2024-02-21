export const post = (method, url, body) => {
  fetch(url, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {console.log(data)});
};

//   https://github.com/Klifsang/Flatdango/blob/main/index.js

export const deleteQuiz = (id, url) => {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
