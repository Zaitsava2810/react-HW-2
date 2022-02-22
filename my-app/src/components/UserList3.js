import React from "react";

const UserList3 = () => {
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
        return <User name={el.name} className="highlighted"></User>;
      })}
    </div>
  );
};

const User = (props) => {
  const currentName = props.name.split("").reverse().join("");
  const Palindrome = currentName.toLowerCase() === props.name.toLowerCase();

  if (props.name.includes("e")) {
    return (
      <span className={Palindrome ? props.className : null}>
        It is Premium User! Welcome,{" "}
        {props.name.length > 5 ? (
          props.name.substring(0, 5) + "..."
        ) : (
          <ComposableUser>{props.name}</ComposableUser>
        )}{" "}
        !
        <br />
      </span>
    );
  } else
    return (
      <span className={Palindrome ? props.className : null}>
        It is user{" "}
        {props.name.length > 5 ? (
          props.name.substring(0, 5) + "..."
        ) : (
          <ComposableUser>{props.name}</ComposableUser>
        )}{" "}
        <br />
      </span>
    );
};

const ComposableUser = (props) => {
  return props.children;
};

export default UserList3;
