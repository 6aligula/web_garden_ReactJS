import React from "react";
import Products from "./Products";

function ProductsLists(props) {
    return (
        <div>

            {props.products.map((products) => {
                return (
                    <React.Fragment key={products.id}>
                        <Products
                            title={products.title}
                            subtitle={products.subtitle}
                            description={products.description}
                            img={products.img}
                            leftColor={products.leftColor}
                            rigthColor={products.rightColor} />
                    </React.Fragment>

                )
            })}
        </div>
    )
}
export default ProductsLists;