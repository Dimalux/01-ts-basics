import axios from "axios";

interface Post {
id: number;
title: string;
body: string;
}

// Функція fetchPosts робить GET-запит до API та повертає список постів.
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    '<https://jsonplaceholder.typicode.com/posts>'
  );
  return response.data;
}


fetchPosts()
  .then((posts) => {
    console.log(posts[0].title);
  })
  .catch((error) => {
    console.error("Помилка при отриманні постів:", error);
  });