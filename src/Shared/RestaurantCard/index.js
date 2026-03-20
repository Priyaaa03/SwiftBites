import React from "react";
import ReactDOM from "react-dom/client";
import { RestaurantCardData } from "../../utils/MockData";
import "./RestaurantCard.scss";

const RestaurantCard = ({resData}) =>{
    console.log("RestaurantCardData", resData);

    return (
        <div className="restaurant-card">
            <div className="restaurant-image">
                <img src={resData.banner_image_es} alt="Restaurant Img" className="img"/>   
                <div className="restaurant-details">
                    <div className="restaurant-name"> {resData.brand_name}</div>
                    <div className="restaurant-description"> {resData.description} </div>
                    <div className="restaurant-discount"> Cuisine Type </div>
                </div> 
            </div>
        </div>
    )
}

export default RestaurantCard;
