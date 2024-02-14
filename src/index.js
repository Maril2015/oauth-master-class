const authorize = ({
  default_avatar_id: defaultAvatarId,
  display_name: displayName,
  })=> {
  const avatarHtml =`<div class="avatar" style="background-image:url('https://avatars.mds.yandex.net/get-yapic/${defaultAvatarId}/islands-middle')"></div>`;
  const nameHtml=`<div class="name">${displayName}</div>`;
  document.getElementById("auth").innerHtml=`${avatarHtml}${nameHtml}`;
   };
const fetchYandexData = (token) =>
  fetch(`htpps://login.yandex.ru/info?format=json&oauth_token=${token}`).then(
    (res)=>res.json()
      );
window.onload = () => {
  document.getElementById("suggest").onclick = () => {
 YaAuthSuggest.init(
      {
        client_id: "7774ada10177476e830fb57e417784bf",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-three.vercel.app/token.html",
      },
      "https://oauth-master-class-three.vercel.app"
      )
       .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);
        authorize(result);
        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
};
  };
