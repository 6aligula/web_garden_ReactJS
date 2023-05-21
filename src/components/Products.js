import React from 'react'
import './styles/Products.css'
import circleImg from '../img/circles.png'

class Products extends React.Component {

    render() {
        /*shorcut KEY=this.props.KEY*/
        const {
            idKey,
            title,
            subtitle,
            description,
            img,
            leftColor,
            rigthColor } = this.props
        return (
            <div className="row products" id={idKey}>
                
                <div className="row tsid">
                    <div className="col-sm-12">
                        <div className=" card " style={{
                            backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rigthColor})`
                        }}>


                            <div className='subtitle'>
                                <h2 className="featurette-heading">{title} </h2>
                                <p className="lead">{subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row tsid">
                    <div className="col-sm-6">
                        <img src={img} width="960" height="640" />
                    </div>
                    <div className="col-sm-6 description">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Products;