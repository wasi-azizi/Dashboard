import React, { useState } from "react";
import "../Card/card.css";

import { RiAttachmentLine, RiChatSmile2Line } from "react-icons/ri";

function Card(props) {
  const [commentsCount, attachementsCount] = useState();

  return (
    <div className="card">
      <div className="first-info">
        <div id="dot-UN">
          <span
            className="dot"
            style={{ backgroundColor: props.card.color }}
          ></span>
          <p id="untilTime">{props.card.untilTime} left</p>
        </div>
        <p id="name">{props.card.name}</p>
        <p className="bio">{props.card.bio}</p>

        <div className="UserImg">
          {props.card.userImages.map((userImages) => {
            return (
              <div key={props.card.id} id="photo">
                <img src={userImages} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="card-icons">
        <p className={props.card.attachementsCount > 0 ? "activeComment" : ""}>
          {" "}
          <RiAttachmentLine id="icon" /> {props.card.attachementsCount}{" "}
        </p>

        <p className={props.card.commentsCount > 0 ? "activeComment" : ""}>
          {" "}
          <RiChatSmile2Line id="icon" /> {props.card.commentsCount}{" "}
        </p>
      </div>
    </div>
  );
}

export default Card;
