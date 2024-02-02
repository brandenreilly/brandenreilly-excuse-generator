/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log();
};

let generateExcuse = () => {
  let who = ["my dog", "My grandma", "my turtle", "My bird"];
  let action = ["ate", "took", "left", "crushed", "broke"];
  let item = ["my homework", "my bicycle", "my car", "my shoe", "my keys"];
  let where = [
    "on the street",
    "in my house",
    "in the parking garage",
    "before class"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let itemIndx = Math.floor(Math.random() * item.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    who[whoIndx] +
    " " +
    action[actIndx] +
    " " +
    item[itemIndx] +
    " " +
    where[whereIndx]
  );
};
