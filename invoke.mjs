import { handler } from "./index.mjs";

const event = {
  requestContext: {
    http: {
      method: "GET"
    },
  },
  // 誰がいいねをしたか
  body: JSON.stringify({
    userName: "代々木二郎",
  }),
  // e.g. /likes/{articleId}
  pathParameters: {
    articleId: '123'
  },
};

const result = await handler(event);
// console.log(result);
console.log(JSON.parse(result.body));
