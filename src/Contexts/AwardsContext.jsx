import React, { createContext, useContext, useState, useEffect } from "react";
import { GetAllPopularAwards } from "../APIs/popularawards";

const PopularAwardsContext = createContext();
export const usePopularAwards = () => useContext(PopularAwardsContext);

export const PopularAwardsProvider = ({ children }) => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAwards = async () => {

    const token = localStorage.getItem("token");
    if (!token) {
      setAwards([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await GetAllPopularAwards(token);
      setAwards(res);
    } catch (error) {
      console.error("Error fetching popular awards:", error);
      setAwards([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAwards();
  }, []);

  return (
    <PopularAwardsContext.Provider value={{ awards, loading, fetchAwards }}>
      {children}
    </PopularAwardsContext.Provider>
  );
};
