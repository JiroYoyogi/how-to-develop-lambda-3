const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export const handler = async (event) => {
  try {
    // HTTP API => event.requestContext?.http?.method
    // REST API => event.httpMethod
    const httpMethod = event.requestContext?.http?.method ?? event.httpMethod;
    const articleId = event.pathParameters?.articleId;

    console.log(httpMethod, articleId);
    
    if (!articleId) {
      throw new Error("articleId is required");
    }

    // POST /likes/{articleId}
    const eventBody = event.body ? JSON.parse(event.body) : {};
    const userName = eventBody.userName ?? "";

    if (!userName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: "userName is required",
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'success',
        articleId,
        userName,
      }),
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: err.message,
      }),
    };
  }
};
