import fetch from "node-fetch";

export const getToken = async () => {

  const apiBase = "http://0.0.0.0:7000/auth";

  const params = {
    username: "basic-thomas",
    password: "sR-_pcoow-27-6PAwCD8",
  };

  try {

    const response = await fetch(apiBase, {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    });

    return response

  } catch (error) {

    return error

  }

  };
