import React,{useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./main.css"

const Main = () =>{
 
    return <div className="container">
        <div className="header-main">
            <h1 className="title-main">
            <span className="negrita">Todo nuestro catalogo</span>
            <br></br>
            En un solo lugar
            <br></br>
            Sin registrarte
            </h1>
            <ol>
            <li>Busca entre cientos de productos</li>
            <li>Guarda tus proveedores favoritos</li>
            <li>Recibe tus pedidos en tu negocio</li>
            </ol>
            </div>
            <div className="carousel-main">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://instagram.faep4-3.fna.fbcdn.net/v/t51.2885-15/e35/106706151_148289470190304_6427813317391192640_n.jpg?tp=1&_nc_ht=instagram.faep4-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=rpKFKxKWEKkAX8epDOF&edm=AP_V10EAAAAA&ccb=7-4&oh=1247a42ee2b5a0fe47485cd138d72dbd&oe=608BE08B&_nc_sid=4f375e"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://instagram.faep4-3.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/165889278_748236572750184_305370608419499225_n.jpg?tp=1&_nc_ht=instagram.faep4-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=OLoFXWJiCU8AX9MJOwg&edm=AP_V10EAAAAA&ccb=7-4&oh=218b29946199760d07a13fc79c196e30&oe=608C2F01&_nc_sid=4f375e"
      alt="Second slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://instagram.faep4-2.fna.fbcdn.net/v/t51.2885-15/e35/71307732_701074403723855_7612004403679185214_n.jpg?tp=1&_nc_ht=instagram.faep4-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5SkYsLt49twAX9EDu5b&edm=AP_V10EAAAAA&ccb=7-4&oh=648de6c7112928f101cd3a28682ff74b&oe=608D3C26&_nc_sid=4f375e"
      alt="Third slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            
           
        </div>
}
export default Main