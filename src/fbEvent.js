const { NODE_ENV } = process.env;

export const initFbSDK = () => {
  return new Promise((resolve, reject) => {
    try {
      if (NODE_ENV !== "production") {
        resolve({
          message: "You're in development. Facebook Analytic is disabled.",
        });
      }
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "1051251482023398",
          cookie: true,
          xfbml: true,
          version: "v10.0",
        });
        window.FB.AppEvents.logPageView();
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
      resolve({ message: "Facebook SDK has been initialized." });
    } catch (err) {
      reject(err);
    }
  });
};

export const logFbEvent = (event) => {
  if (NODE_ENV !== "production" || !window.FB) return;
  window.FB.AppEvents.logEvent(event);
};
