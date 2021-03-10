const { NODE_ENV } = process.env;

export const logFbEvent = (event) => {
  if (NODE_ENV !== "production") return;
  window.FB.AppEvents.logEvent(event);
};
