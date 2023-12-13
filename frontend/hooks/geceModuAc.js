import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./localStorageKullan";

export const useGeceModu = (initialValue) => {
  /* const storedValue = localStorage.getItem("darkMode");
  const value = storedValue != null ? storedValue : initialValue; */

  const [darkMode, setDarkMode] = useLocalStorage("geceModu", initialValue);
  /* useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]); */
  return [darkMode, setDarkMode];
};
