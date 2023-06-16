import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import useGet from "../hooks/useGet";
import Loading from "./Loading";

export default function UserList() {
  const [users, error, isLoading, getUser] = useGet("user");
  const [listener, setListener] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };
    fetchData();
  }, [listener]);

  return (
    <>
      {isLoading && <Loading />}
      {users && <UserTable users={users} getUsers={setListener} />}
      {error && <h1>Something went wrong while getting the data</h1>}
    </>
  );
}
