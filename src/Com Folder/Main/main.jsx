import React, { useState } from "react";
import "./mStyle.css";
import {
  RiMessage3Line,
  RiCalendar2Line,
  RiFolder5Line,
  RiBook3Line,
  RiSlideshowLine,
} from "react-icons/ri";

import { MdListAlt } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { AiOutlineVideoCamera } from "react-icons/ai";

import { CardList } from "../Card-list/cardList";

function Main(props) {
  const [active, setActive] = useState("2");
  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const [activeFo, setActiveFo] = useState("2");
  const handleClickFo = (event) => {
    setActiveFo(event.target.id);
  };

  return (
    <div className="contianer">
      <header>
        <div className="search-bar">
          <div className="search">
            <button type="submit">
              <FaSearch />
            </button>
            <input type="text" placeholder="Discover" name="search" />
          </div>
          <div className="comment-bar">
            <a href="#">
              <RiMessage3Line />
            </a>
            <a href="#">
              <AiOutlineVideoCamera />
            </a>
          </div>
        </div>

        <div className="menu-bar">
          <ul>
            <li>
              <a
                key={1}
                id={"1"}
                onClick={handleClick}
                className={active === "1" ? "active" : undefined}
                href="#"
              >
                <RiCalendar2Line className="header-icon" /> Study
              </a>
            </li>

            <li>
              <a
                key={2}
                id={"2"}
                onClick={handleClick}
                className={active === "2" ? "active" : undefined}
                href="#"
              >
                <RiFolder5Line className="header-icon" /> Projects
              </a>
            </li>

            <li>
              <a
                key={3}
                id={"3"}
                onClick={handleClick}
                className={active === "3" ? "active" : undefined}
                href="#"
              >
                <RiBook3Line className="header-icon" /> Homework
              </a>
            </li>

            <li>
              <a
                key={4}
                id={"4"}
                onClick={handleClick}
                className={active === "4" ? "active" : undefined}
                href="#"
              >
                <RiSlideshowLine className="header-icon" /> Calss
              </a>
            </li>

            <li>
              <a
                key={5}
                id={"5"}
                onClick={handleClick}
                className={active === "5" ? "active" : undefined}
                href="#"
              >
                <MdListAlt className="header-icon" /> Topics
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="main-body">
        <CardList cards={props.cards} isLoading={props.isLoading} />
      </div>

      <footer>
        <ul>
          <li>
            <a
              key={1}
              id={"1"}
              onClick={handleClickFo}
              className={activeFo === "1" ? "activeFo" : undefined}
              href="#"
            >
              1
            </a>
          </li>
          <li>
            <a
              key={2}
              id={"2"}
              onClick={handleClickFo}
              className={activeFo === "2" ? "activeFo" : undefined}
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              key={3}
              id={"3"}
              onClick={handleClickFo}
              className={activeFo === "3" ? "activeFo" : undefined}
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              key={4}
              id={"4"}
              onClick={handleClickFo}
              className={activeFo === "4" ? "activeFo" : undefined}
              href="#"
            >
              4
            </a>
          </li>
          <li>
            <a
              key={5}
              id={"5"}
              onClick={handleClickFo}
              className={activeFo === "5" ? "activeFo" : undefined}
              href="#"
            >
              5
            </a>
          </li>
          <li>
            <a
              key={6}
              id={"6"}
              onClick={handleClickFo}
              className={activeFo === "6" ? "activeFo" : undefined}
              href="#"
            >
              6
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Main;
