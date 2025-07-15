import React, { useEffect, useState } from "react";
import { logEvent } from "../../../Logging Middleware/logger";
import UserInfo from "../Components/userinfo.jsx";

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    logEvent("info", "page", "HomePage mounted");

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);
        logEvent("info", "api", "Fetched user successfully");
      } catch (err) {
        logEvent("error", "api", "Failed to fetch user");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      {user ? <UserInfo user={user} /> : <p>Loading user...</p>}
    </div>
  );
};

export default HomePage;
