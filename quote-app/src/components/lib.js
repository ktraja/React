const dbUrl =
  "https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app";

export const addQuote = async (newQuote) => {
  const response = await fetch(dbUrl + "/quotes.json", {
    method: "POST",
    body: JSON.stringify(newQuote),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create new Quote");
  }
  return null;
};

export const getAllQuotes = async () => {
  const response = await fetch(dbUrl + "/quotes.json");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get Quotes");
  }

  const formattedData = [];
  for (const key in data) {
    const dataObj = {
      id: key,
      ...data[key],
    };
    formattedData.push(dataObj);
  }
  return formattedData;
};

export const getSingleQuote = async (quoteId) => {
  const response = await fetch(dbUrl + "/quotes/" + quoteId + ".json");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Not able to retrieve Quote.");
  }
  return data;
};

export const addComment = async (commentData) => {
  const response = await fetch(
    dbUrl + "/quotes/" + commentData.quoteId + ".json",
    {
      method: "POST",
      body: JSON.stringify({
        commentId: commentData.commentId,
        comment: commentData.comment,
      }),
      headers: { "Application-Type": "text-json" },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Not able to add Comment.");
  }
};

export const getComments = async (quoteId) => {
  const response = await fetch(dbUrl + "/quotes/" + quoteId + ".json");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Not able to get Comments.");
  }

  const commentArray = [];

  for (const key1 in data) {
    if ((key1 !== "author") & (key1 !== "text")) {
      for (const key2 in data[key1]) {
        commentArray.push({ id: key1, text: data[key1][key2] });
      }
    }
  }
  return commentArray;
};
