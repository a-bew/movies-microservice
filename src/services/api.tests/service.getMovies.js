import fetch from "node-fetch";

export const getMovies = async ({ userId }) => {

  const apiBase =
    "http://0.0.0.0:7000/movies?" + new URLSearchParams({ userId });

    try {
      const response = await fetch(apiBase, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response;

    } catch (error) {

      throw new Error(error.message);

    }
};
