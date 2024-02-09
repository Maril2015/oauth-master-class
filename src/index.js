window.onload = () => {
  document.getElementById("button").onclick = () => {
 YaAuthSuggest.init(
      {
        client_id: "7774ada10177476e830fb57e417784bf",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-three.vercel.app/token.html",
      },
      "https://oauth-master-class-three.vercel.app/",
      )
       .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
