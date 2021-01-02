import React from "react";
import { API } from "../config";


//it takes the props as an argument
const Image = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`${API}/products/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default Image;