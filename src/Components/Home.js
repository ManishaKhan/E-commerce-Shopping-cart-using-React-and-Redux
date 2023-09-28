import React from 'react'
import Header from './Header'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import { NavLink, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Footer } from './Footer';
// import Carousel from 'react-bootstrap/Carousel';
import video1 from "../Video/video1.mp4";
import video2 from "../Video/video2.mp4";
// import video3 from "../Video/video3.mp4";
import video4 from "../Video/video4.mp4";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// Home page of the e-comerce site
const Home = () => {
    return (
        <>
           
            {/* <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "300px" }} />
                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" style={{ height: "300px" }} src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png" />
                        </NavLink>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Title><NavLink to='/shop'><Card.Img style={{ height: "300px" }} src="https://d2xamzlzrdbdbn.cloudfront.net/BlogImages/322b9567-c69f-48d6-9f72-a733a8e9affa.jpg" /></NavLink></Card.Title>

                    <Card.Img style={{ height: "300px" }} src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </Card>



                <Card>
                    <Card.Img variant="top" style={{ height: "300px" }} src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" style={{ height: "300px" }} src="https://s3b.cashify.in/gpro/uploads/2021/12/27211323/Best-Smart-Home-Devices.jpg" />
                        </NavLink>
                    </Card.Body>

                </Card>
            </CardGroup> */}




            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-2 bg-light border ">


                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "600px" }}
                                    src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                />

                                <Card.ImgOverlay>
                                    <Card.Title>
                                        <h1>Best Electronics Services</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        The One-stop Electronics Device Shopping Destination. E-commerce is
                                        revolutionizing the way we all shop.
                                    </Card.Text>
                                    <NavLink to="/shop">
                                        <button className="button-49">Shop now</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>

                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "600px" }}
                                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                />

                                <Card.ImgOverlay>
                                    <NavLink to="/contact">
                                        <button className="button-49">Contact Us</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>


                </div>
            </div>

            

            {/* <Carousel data-bs-theme="dark">

            <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-vector/flash-sales-promotion-sale-banner-with-discount-commercial-poster-coupon-voucher_902944-897.jpg"
                        alt="First slide"
                        style={{ height: "600px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-vector/colorful-sale-banner_1082-104.jpg"
                        style={{ height: "600px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png"
                        alt="Second slide"
                        style={{ height: "600px" }}
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://s3b.cashify.in/gpro/uploads/2021/12/27211323/Best-Smart-Home-Devices.jpg"
                        alt="Third slide"
                        style={{ height: "600px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://img.myloview.com/posters/new-arrival-sale-market-advertising-design-with-laptop-discount-offer-banner-on-new-arrivals-700-148267939.jpg"
                        alt="Third slide"
                        style={{ height: "600px" }}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel> */}
            <br></br>
            <Carousel responsive={responsive} autoPlay autoPlaySpeed={1000}>
                <div>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                        style={{ height: "300px" }}

                    /></div>
                <div>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-vector/flash-sales-promotion-sale-banner-with-discount-commercial-poster-coupon-voucher_902944-897.jpg"
                        alt="First slide"
                        style={{ height: "300px" }}

                    /></div>

                <div>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1571265741625-917e6b6ea1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGVsZWN0cm9uaWMlMjBkZXZpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                        style={{ height: "300px" }}

                    /></div>

                <div><img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/colorful-sale-banner_1082-104.jpg"
                    style={{ height: "300px" }}
                /></div>

                <div><img
                    className="d-block w-100"
                    src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png"
                    alt="Second slide"
                    style={{ height: "300px" }}
                /></div>
                <div>
                    <img
                        className="d-block w-100"
                        src="https://s3b.cashify.in/gpro/uploads/2021/12/27211323/Best-Smart-Home-Devices.jpg"
                        alt="Third slide"
                        style={{ height: "300px" }}
                    /></div>

                <div>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Third slide"
                        style={{ height: "300px" }}
                    /></div>

                <div>
                    <img
                        className="d-block w-100"
                        src="https://img.myloview.com/posters/new-arrival-sale-market-advertising-design-with-laptop-discount-offer-banner-on-new-arrivals-700-148267939.jpg"
                        alt="Third slide"
                        style={{ height: "300px" }}
                    /></div>
            </Carousel>

            <br></br>

            <CardGroup>
                <Card >
                    <Card.Title></Card.Title>
                    <video src={video1} muted autoPlay controls style={{height:"200px"}}></video>
                    
                </Card>

                <Card >
                <Card.Title></Card.Title>
                    <video src={video4} muted autoPlay controls style={{height:"200px"}}></video>
                    <Card.Title></Card.Title>
                </Card>

                {/* <Card >
                <Card.Title></Card.Title>
                    <video src={video3} muted autoPlay controls style={{height:"200px"}}></video>
                    <Card.Title></Card.Title>
                </Card> */}

                <Card >
                <Card.Title></Card.Title>
                    <video src={video2} muted autoPlay controls style={{height:"200px"}}></video>
                    <Card.Title></Card.Title>
                </Card>

   
            </CardGroup>

            <Footer/>
            {/* <CardGroup>
                <Card >
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "300px" }} ></Card.Img>
                </Card>

                <Card>
                    <Card.Img style={{ height: "300px" }} src="https://images.unsplash.com/photo-1571265741625-917e6b6ea1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGVsZWN0cm9uaWMlMjBkZXZpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                </Card>



                <Card>
                    <Card.Img variant="top" style={{ height: "300px" }} src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                </Card>
            </CardGroup> */}


            {/* <Card className="bg-dark text-white">

                <Card.Img src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                <Card.ImgOverlay>
                    <Card.Title ><h1>Best <br></br>Electronics <br></br>Services</h1></Card.Title>
                    <Card.Text>
                        The One-stop Electronics Device Shopping Destination. E-commerce is revolutionizing the way we all shop.
                    </Card.Text>
                    <NavLink to="/shop"><button className="button-49">Shop now</button></NavLink>
                </Card.ImgOverlay>
            </Card> */}

            {/* <Card className="bg-dark text-white">
            
                <Card.Img src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                
                <Card.ImgOverlay>
                
                    <Card.Title ><h1>Best <br></br>Electronics <br></br>Services</h1></Card.Title>
                    <Card.Text>
                    The One-stop Electronics Device Shopping Destination. E-commerce is revolutionizing the way we all shop.
                    </Card.Text>
                    <NavLink to="/shop"><button className="button-49">Shop now</button></NavLink>
                    </Card.ImgOverlay>
                    
                    
            </Card> */}



            {/* <div className="d-grid gap-3">

                <div className="p-2 bg-light border">
                    <Card className="bg-dark text-white">
                    <Card.Img style={{width: "100%", height: "600px", backgroundSize: "cover"}} src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

                    <Card.ImgOverlay>
                        <Card.Title ><h1>Best <br></br>Electronics <br></br>Services</h1></Card.Title>
                        <Card.Text>
                            The One-stop Electronics Device Shopping Destination. E-commerce is revolutionizing the way we all shop.
                        </Card.Text>
                        <NavLink to="/shop"><button className="button-49">Shop now</button></NavLink>
                    </Card.ImgOverlay>
                </Card>  
                </div>

                <div className="p-2 bg-light border">
                    <Card className="bg-dark text-white">
                    <Card.Img style={{width: "100%", height: "300px", backgroundSize: "cover"}} src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80" />

                    <Card.ImgOverlay>
                        <NavLink to="/contact"><button className="button-49">Contact Us</button></NavLink>
                    </Card.ImgOverlay>
                </Card>  
                </div>
                
            </div> */}

            {/* <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: "300px" }} />
                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png" />
                        </NavLink>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Title><NavLink to='/shop'><Card.Img src="https://d2xamzlzrdbdbn.cloudfront.net/BlogImages/322b9567-c69f-48d6-9f72-a733a8e9affa.jpg" /></NavLink></Card.Title>
                    <Card.Img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image" />
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                    <Card.Body>
                        <NavLink to='/shop'>
                            <Card.Img variant="top" src="https://s3b.cashify.in/gpro/uploads/2021/12/27211323/Best-Smart-Home-Devices.jpg" />
                        </NavLink>
                    </Card.Body>

                </Card>
            </CardGroup> */}


            {/* chatgpt code */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "600px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                />

                                <Card.ImgOverlay>
                                    <Card.Title>
                                        <h1>Best Electronics Services</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        The One-stop Electronics Device Shopping Destination. E-commerce is
                                        revolutionizing the way we all shop.
                                    </Card.Text>
                                    <NavLink to="/shop">
                                        <button className="button-49">Shop now</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>



                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "600px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
                                />

                                <Card.ImgOverlay>
                                    <NavLink to="/contact">
                                        <button className="button-49">Contact Us</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="p-2 bg-light border">
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ width: "100%", height: "600px", objectFit: "cover" }}
                                    src="https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
                                />

                                <Card.ImgOverlay>
                                    <NavLink to="/contact">
                                        <button className="button-49">Contact Us</button>
                                    </NavLink>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default Home
