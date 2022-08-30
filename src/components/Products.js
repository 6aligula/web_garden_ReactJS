import React from 'react'
import './styles/Products.css'
import circleImg from '../img/circles.png'

class Products extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         image:'https://firebasestorage.googleapis.com/v0/b/web-papa-de84a.appspot.com/o/clorador.jpg?alt=media&token=b80df9d7-7e16-4b37-a6b6-4d8c0d2c93d1'
    //     }
    // }
    /* This function is build just after someone component is built. This is the best moment for call APIs */
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             image: ''
    //         })

    //     }, 5000)
    // }

    render() {
        /*shorcut KEY=this.props.KEY*/
        const {
            title,
            subtitle,
            description,
            img,
            leftColor,
            rigthColor } = this.props
        return (
            <div className="row products" >
                <div className="row tsid">
                    <div className="col-sm-12">
                        <div className=" card " style={{
                            backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rigthColor})`
                        }}>


                            <div className='subtitle'>
                                <h1 className="featurette-heading">{title}</h1>
                                <h2 className="lead">{subtitle}</h2>
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