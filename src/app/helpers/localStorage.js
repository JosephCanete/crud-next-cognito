export const storeMyToken = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
