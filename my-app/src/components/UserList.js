import React from "react";
import User from "./User";

const UserList = () => {
  const userArr = [
    { id: "uniq1", name: "Paul" },
    { id: "uniq2", name: "Mary" },
    { id: "uniq3", name: "Viktor" },
    { id: "uniq4", name: "Suzanna" },
    { id: "uniq5", name: "Peter" },
    { id: "uniq6", name: "Vladislav" },
    { id: "uniq7", name: "Anna" },
  ];
  return (
    <div>
      {userArr.map((el) => {
        return <User name={el.name}></User>;
      })}
    </div>
  );
};

export default UserList;
