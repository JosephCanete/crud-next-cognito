import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [listener, setListener] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://kqj4xsva5i.execute-api.ap-southeast-1.amazonaws.com/dev/user"
        );
        const sortedData = data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setUsers([...sortedData]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [listener]);

  return <UserTable users={users} getUsers={setListener} />;
}
