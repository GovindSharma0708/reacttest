import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const firstBook = {
author: "James Clear",
title: "Atomic Habits",
img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",

}
const secondBook = {
  author: "Robert Greene",
  title: "The 48 laws of power",
  img: "https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL300_SR300,200_.jpg",
  
  }

  



const BookList = () => {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
      
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  
  return (
    <article className="book">
      <img
        src={props.img}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
