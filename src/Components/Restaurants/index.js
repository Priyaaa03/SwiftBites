import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./../../Shared/RestaurantCard";
import "./Restaurants.scss";
import { RestaurantCardData } from "../../utils/MockData";

//Data logic handled by parent component 
const Restaurants = () => {

    return(
        <div className="restaurants-body-container">
            {RestaurantCardData.data.map((restaurants, index) => (
                <RestaurantCard 
                    key = {index}
                    resData = {restaurants} 
                />

            ))}
            
        </div>
    )
}

export default Restaurants;