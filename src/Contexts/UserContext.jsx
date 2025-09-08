import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { GetCurrentUserInfo, CheckUserInBrokerage } from "../APIs/user";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInBrokerage, setIsInBrokerage] = useState(false);
  const [loading, setLoading] = useState(true);

  const mounted = useRef(false);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setIsInBrokerage(false);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const userInfo = await GetCurrentUserInfo(token);
      setUser(userInfo);

      const brokerageStatus = await CheckUserInBrokerage(token);
      setIsInBrokerage(brokerageStatus.data.brokerage);
    } catch (error) {
      console.error("Error fetching user info:", error);
      setUser(null);
      setIsInBrokerage(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isInBrokerage, fetchUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
