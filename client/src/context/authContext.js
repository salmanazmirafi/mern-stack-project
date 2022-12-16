import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Salman Azmi Rafi",
      profilePic:
        "https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t39.30808-6/301266430_131973959553727_8899198810225477077_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kXLnIAlICUYAX_RdGf4&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AfCdcdZ1e4yXpPqoT-y4QYWwq0hYHwDwnGRW5KwauyGwRw&oe=639F45C1",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
