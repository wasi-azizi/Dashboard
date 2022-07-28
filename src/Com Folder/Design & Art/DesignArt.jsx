import React, {useState} from "react";
import '../Design & Art/DesignArt.css'

import  Capture  from '../Design & Art/Capture.PNG'
import { TbSquare } from "react-icons/tb"
import { RiPenNibLine, RiCalendarEventLine } from "react-icons/ri"


function Design() {

    const [active , setActive] = useState("1")
    const handleClick = (event) => {
        setActive(event.target.id);
    }

    return ( 
        <div className="designSection">
            <div className="designHeader">
                <TbSquare id="headerIcon" />
                <div className="nameImg">
                    <p>Martin Bont</p>
                    <img src={ "https://randomuser.me/api/portraits/men/76.jpg" } alt="" />
                </div>
            </div>
            <div className="designMain">
                <img src={Capture} alt="" />
                <div className="mainContiner">
                    <div className="heading">
                        <h1>Design & Art</h1>
                        <p>Mobile UX design focuses strongly on efficiency and discoverability.</p>
                    </div>
                    <div className="lessonInfo">
                        <div className="lessonInfoHeading">
                            <RiPenNibLine id="lessonInfoIcon"/>
                            <h2>Lesson Info</h2>
                        </div>
                        <div className="lessonInfoDate">
                            <p>12 june</p>
                            <span className="mDot"></span>
                            <p>10:00am</p>
                            <span className="mDot"> </span> 
                            <p>1h 40m</p>
                        </div>
                        <div className="projectTags">
                            <div className="projectTagsHeader">
                                <RiCalendarEventLine id="projectTagIcon" />
                                <h2>Project tags</h2>
                            </div>
                            <div className="projectTagsContent">
                                <button 
                                        key={1}
                                        id={"1"} 
                                        onClick={handleClick}
                                        className={active === "1" ? "active" : undefined} >Design
                                    </button>
                                <button 
                                        key={2}
                                        id={"2"} 
                                        onClick={handleClick}
                                        className={active === "2" ? "active" : undefined} >Interface
                                    </button>
                                <button 
                                        key={3}
                                        id={"3"} 
                                        onClick={handleClick}
                                        className={active === "3" ? "active" : undefined} >Application
                                </button><br/>
                                <button 
                                        key={4}
                                        id={"4"} 
                                        onClick={handleClick}
                                        className={active === "4" ? "active" : undefined} >UI/UX
                                    </button>
                                <button
                                        key={5}
                                        id={"5"} 
                                        onClick={handleClick}
                                        className={active === "5" ? "active" : undefined} >Mobile
                                    </button>
                                <button 
                                        key={6}
                                        id={"6"} 
                                        onClick={handleClick}
                                        className={active === "6" ? "active" : undefined} >Art
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Design;