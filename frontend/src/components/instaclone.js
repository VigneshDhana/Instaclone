import React from "react";
import Post from "./post";
import Header from "./header";
import { useEffect } from "react";
import { useState } from "react";

function Instaclone() {
  let [arr, setArr] = useState([]);
  useEffect(() => {
    fetch("https://instaclone-server-vignesh.herokuapp.com/instaclone")
      .then((res) => res.json())
      .then((result) => {
        setArr(result.res);
      });
  }, []);
  let post = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    post.push(<Post key={i} obj={arr[i]} />);
  }

  return (
    <>
      <Header />
      <section>{post}</section>
    </>
  );
}

export default Instaclone;

//server link
//https://instaclone-server-vignesh.herokuapp.com/instaclone
