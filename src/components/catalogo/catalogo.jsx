import React,{useState, useEffect,useContext} from 'react'
import cors from "cors"
import {Card,Button} from 'react-bootstrap'
import { Link, useHistory} from "react-router-dom";
import "./catalogo.css"
import axios from "axios"

import {AppContext} from "../../applications"
import Pagination from '../Pagination/Pagination'




const Catalogo = () =>{
 const [list, setList] = useState([]);
 const  [search,id,setId]  = useContext(AppContext);
 

 //PAGINACION
    //cantidad de productos a mostrar por pagina
 const [productPerPage, setProductPerPage] = useState(8);
 //pagina actual de paginaciòn
 const [currentPage, setCurrentPage] = useState(1);

 const indexOfLastProduct = currentPage * productPerPage;
 const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  //indico pagina actual, siempre comienza en pag 1
 const paginate = (pageNum) => setCurrentPage(pageNum);
 //aumento y decremento la pagina segun corresponda
 const nextPage = () => setCurrentPage(currentPage + 1);
 const prevPage = () => setCurrentPage(currentPage - 1);


  var currentProducts = Array.isArray(list) &&
      list.slice(indexOfFirstProduct, indexOfLastProduct);

 



  






    

 //peticion a API mercado libre
    useEffect(() => {
    const getProducts = async (e)=>{
       const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${e}`)
            setList(response.data.results)         
    }
    getProducts(search)
    },[search])


    const history = useHistory()
    const handleOnClick=()=>{
      history.push("./product")

    }
console.log(list)


        return (

    <div>
        <div className="header-catalogo">
        <h2 className="tipografia-catalogo" >Catalogo</h2>
        </div>  
        <hr></hr>  
        
        <div className="mostrar-catalogo">
        
        {!list ? "cargando..." : currentProducts.map((i)=>(
          <Link className="mostrar-catalogo" to={`/product/${i.id}`} onClick={ handleOnClick}>
            <Card  className="card-catalogo" key={i.id} style={{ width: '15rem' }}>
            <Card.Img className="img-card-catalogo" variant="top" src={i.thumbnail} />
            <hr></hr>
            
            <Card.Body className="body-card-catalogo">
              <Card.Title className="title-body-card-catalogo">{i.title.slice(0,40) + "..."}</Card.Title>
              <Card.Text>
               ${i.price}
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
          
        ))}
        
        </div>
        
        <Pagination
                productPerPage={productPerPage}
                totalproduct={list.length}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
              />
    </div>
    )
}
export default Catalogo