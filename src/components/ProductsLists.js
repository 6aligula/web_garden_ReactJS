import React from "react";
import Products from "./Products";

const ProductsLists = ({products}) => {
    return (
        <div className="box">
            {products.map((product) => {
                return (
                    <React.Fragment key={product.id}>
                        <Products
                            title={product.title}
                            subtitle={product.subtitle}
                            description={product.description}
                            img={product.img}
                            leftColor={product.leftColor}
                            rigthColor={product.rightColor} />
                    </React.Fragment>

                )
            })}
        </div>
    )
}

export default ProductsLists

//old method
// function ProductsLists(props) {
//     return (
//         <div>

//             {props.products.map((products) => {
//                 return (
//                     <React.Fragment key={products.id}>
//                         <Products
//                             title={products.title}
//                             subtitle={products.subtitle}
//                             description={products.description}
//                             img={products.img}
//                             leftColor={products.leftColor}
//                             rigthColor={products.rightColor} />
//                     </React.Fragment>

//                 )
//             })}
//         </div>
//     )
// }
// export default ProductsLists;