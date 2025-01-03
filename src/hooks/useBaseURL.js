// src/hooks/useBaseURL.js
export const useBaseURL = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  // Log the base URL to the console (you can remove it after debugging)
  // console.log("Base URL:", baseURL);

  return baseURL;
};
