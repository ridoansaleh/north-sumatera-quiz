const isObjects = (value) => {
  if (!value) return false;
  if (Array.isArray(value) || typeof value === "object") {
    return true;
  }
  return false;
};

const session = {
  set: (key, value) => {
    let _value = isObjects(value) ? JSON.stringify(value) : value;
    sessionStorage.setItem(key, _value);
  },
  get: (key, fallbackValue) => {
    let sessionValue = sessionStorage.getItem(key) || fallbackValue;
    try {
      return JSON.parse(sessionValue);
    } catch (_) {
      return sessionValue;
    }
  },
  remove: (key) => sessionStorage.removeItem(key),
  clear: () => sessionStorage.clear(),
};

export default session;
