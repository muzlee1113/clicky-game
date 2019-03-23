import React from "react";


function Cards(props) {
    return (<>
            <div className="cardcontainer">
                <img className="article-img" id = {props.id} src={process.env.PUBLIC_URL + props.img} alt=" " onClick={(e)=>props.handleClick(props.id, e)}/>
            </div>
    </>)
}


export default Cards