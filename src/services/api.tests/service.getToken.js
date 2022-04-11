import fetch from "node-fetch";

export const getToken = async (params) => {

  const apiBase = "http://0.0.0.0:7000/auth";



  try {

    const response = await fetch(apiBase, {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    });

    return response

  } catch (error) {

    throw new Error(error.message)

  }

  };
