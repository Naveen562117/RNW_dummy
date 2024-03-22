import React from "react";
import { Products } from "../../Constants/products";
import Tile from "../Tile";
import { StyledProductsList } from "./style"

export default function TilesList() {
    return (
        <>
            <h3 className="page-heading"> Why Choose HDFC ERGO Optima Secure </h3>
            <StyledProductsList>
                {Products.map((item) => (
                    <Tile key={item.key}
                        title={item.title}
                        image={item.image} />
                ))}
            </StyledProductsList>
        </>
    )
}