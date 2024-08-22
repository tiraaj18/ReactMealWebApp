import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([]);
  
  const fetchMeals = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
    fetchMeals(randomMealUrl);
  }, []);

  return <AppContext.Provider value={{meals}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
