import React, { createContext, useContext, useState, useEffect } from "react";
import { GetAllPopularAwards } from "../APIs/popularawards";

const PopularAwardsContext = createContext();
export const usePopularAwards = () => useContext(PopularAwardsContext);

export const PopularAwardsProvider = ({ children }) => {
  const [awards, setAwards] = useState([]);
  const [awardsLoading , setAwardsLoading] = useState(true);

  const fetchAwards = async () => {

    const token = localStorage.getItem("token");
    if (!token) {
      setAwards([]);
      setAwardsLoading(false);
      return;
    }

    try {
      setAwardsLoading(true);
      const res = await GetAllPopularAwards(token);
      setAwards(res);
    } catch (error) {
      console.error("Error fetching popular awards:", error);
      setAwards([]);
    } finally {
      setAwardsLoading(false);
    }
  };

  useEffect(() => {
    fetchAwards();
  }, []);

  return (
    <PopularAwardsContext.Provider value={{ awards, awardsLoading, fetchAwards }}>
      {children}
    </PopularAwardsContext.Provider>
  );
};
