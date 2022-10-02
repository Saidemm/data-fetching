// Utility methods for storing/fetching localStorage

export const storeInLocalStorage = (key, objectValue) => {
  window.localStorage.setItem(key, JSON.stringify(objectValue));
};

export const fetchFromLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};