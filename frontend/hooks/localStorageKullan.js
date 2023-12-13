import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storage, setStorage] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue != null ? storedValue : initialValue;
  });
  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStorage(value);
  };

  return [storage, updateStorage];
};
