import fetch from "node-fetch";

export const postMovies = async (token) => {
  const apiBase = "http://0.0.0.0:7000/movies";

    try {
      const response = await fetch(apiBase, {
        method: "POST",
        body: JSON.stringify({ title: "coda" }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response

    } catch (error) {

      return error;

    }
};
