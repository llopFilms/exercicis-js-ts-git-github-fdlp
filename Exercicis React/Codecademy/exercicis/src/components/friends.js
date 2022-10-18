import React from "react";

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
  },
];

const Friends = () => (
  <ul>
    <li>Hola</li>
    {friends.map((friend, index) => (
      <>
        <li key={index}>{friend.title}</li>
        <img width="200px" alt="" src={friend.src} />
      </>
    ))}
  </ul>
);

export default Friends;
