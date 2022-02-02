import React from "react";

function Entry(props) {
  return (

    <
    div className = "term" >
    <
    dt >
    <
    span className = "emoji"
    role = "img"
    aria - label = "Tense Biceps" > {
      props.emojiImg
    } <
    /span> <
    span > {
      pops.name
    } < /span> < /
    dt > <
    dd > {
      props.meaning
    } <
    /dd> < /
    div >
  );
}

export default Entry;