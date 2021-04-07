import Carousel from 'react-bootstrap/Carousel'
import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import './product.css'
import axios from "axios"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Swal from "sweetalert2";
const Product = () =>{
    const [product, setProduct] = useState("")
    const {id} = useParams()



    useEffect(() => {
        const getProduct = async(id)=>{
           const response = await axios(`https://api.mercadolibre.com/items/${id}`)
                setProduct(response.data)       
        }
        getProduct(id)
    },[])

console.log(product)

const onClick =()=>{

        const fetchData = async (idUser,idProduct,title,price ) => {
          try {
            const { data } = await axios.post(
              "https://cwytr7utm6.execute-api.us-east-2.amazonaws.com/dev/postproduct",
              {
                idUser,
                idProduct,
                title,
                price
              }
            );
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
      
  
        fetchData(
          "5",
          product.id,
          product.title,
          product.price
        );
    Swal.fire({
        icon: "success",
        title: `Producto añadido a favoritos`,
        showConfirmButton: true,
        background: "#19191a",
      });
}

 return (
           <div className="product">
               
               <div key={product.id} className="img-description-product">
               
                <div>
                    
                    <img className="img-product" src={!product.pictures? null:  product.pictures[0].url} ></img>
               </div>
        
               <div  className="description-product">
                   <div className="title-product">
                        <h1 className="tipografia-title-product">{product.title}</h1>
                   </div>
                   <div className="body-product">
                       
                        <h3 className="tipografia-product">${product.price} solo por hoy</h3>
                        <h3 className="tipografia-product">estado: {product.condition}</h3>
                        <h3 className="tipografia-product">{product.warranty}</h3>
                   </div>
                   <div className="progreso">
                        <h3 className="tipografia-product">Reputación del producto</h3>
                        <ProgressBar striped variant="success"  animated now={product.health * 100} />

                   </div>
                   <Button className="button-fav" onClick={onClick} variant="warning">Añadir a favoritos</Button>{' '}
                   
               </div>
               
               </div>
               
               
         </div>
        )

 }
export default Product