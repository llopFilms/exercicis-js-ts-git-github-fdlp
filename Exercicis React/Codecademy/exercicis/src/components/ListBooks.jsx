import React from "react";

const estil = {
  textAlign: "left",
  marginLeft: "80px",
};

const ListBooks = ({ books }) => (
  <ol style={estil}>
    {books.map((book, index) => (
      <li key={`ol+ ${index}`}>
        <ul key={`ul+ ${index}`}>
          <li key={`Title book ${index}`}>Title: {book.title}</li>
          <li key={`Author book ${index}`}>Author: {book.author}</li>
          <li key={`Weeks book ${index}`}>Weeks: {book.weeksOnList}</li>
          <br></br>
        </ul>
      </li>
    ))}
  </ol>
);

export default ListBooks;
