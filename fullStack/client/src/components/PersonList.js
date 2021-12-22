import React from "react";

const PersonList = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        return (
          <p key={person._id}>
            {person.firstName} {person.lastName}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
