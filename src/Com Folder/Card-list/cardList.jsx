import React from "react";
import "../Card-list/cardList.css";
import Card from "../Card/card";

import { RiPencilRulerLine } from "react-icons/ri";

export const CardList = (props) => {
  return (
    <div className="contianer">
      {props.isLoading && (
        <div className="loading">
          {Array.apply(null, { length: 6 }).map((i) => (
            <div className="card is-loading" key={i}>
              <div className="first-info">
                <div id="dot-UN">
                  <p className="untilTime-l"></p>
                </div>
                <p className="name-l"></p>
                <p className="bio-l"></p>

                <div className="UserImg">
                  <div className="photo-l">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="icons-l">
                  <p></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cardList">
        {props.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <div className="card">
          <div className="addProject">
            <RiPencilRulerLine id="pencilIcon" />
            <br />
            <a href="#">Add Project </a>
          </div>
        </div>
      </div>
    </div>
  );
};
