import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

function APIContextProvider({ children }) {
  // Initialize state
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error))
      
  }, []);

  return (
    <APIContext.Provider value={{ movies,isLoading }}>{children}</APIContext.Provider>
  );
}

export default APIContextProvider;

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
