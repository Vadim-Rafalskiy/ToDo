"use strict";
import { Item } from "./Item.js";
import { items } from "./items.js";

const refs = {
  list: document.querySelector(".list"),
  form: document.querySelector(".form"),
};

const render = () => {
  const lis = items.map(Item).join("");

  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", lis);
};

const addItem = (e) => {
  e.preventDefault();

  const { value } = e.target.elements.text;
  const payload = {
    text: value,
    isDone: false,
  };

  items.push(payload);
  render();

  refs.form.reset();
};

//run
render();

//add event listeners
refs.form.addEventListener("submit", addItem);
