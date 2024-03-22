import React from "react";
import { StyledContentContainer } from "./style"

export default function Tile(props) {
    const { title, image } = props;
    // const imgSrcPath = "";
    return (
        <StyledContentContainer>
            <div className="iconwrp">
                <img src={`${image}`} alt={title}></img>
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
        </StyledContentContainer>
    )
}