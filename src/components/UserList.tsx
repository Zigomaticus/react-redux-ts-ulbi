import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/actions-creaters/user";
import { useTypeSelector } from "./hooks/useTypeSelector";

const UserList: FC = () => {
  const { loading, users, error } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
