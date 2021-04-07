import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import './fav.css'



const Fav = () =>{
    const [user, setUser] =useState({})


     useEffect(() => {
        const getUser = async ()=>{
           const response = await axios(`https://cwytr7utm6.execute-api.us-east-2.amazonaws.com/dev/getproduct?idUser=5`)
                setUser(response.data)  
                    
        }
        getUser(user)
        },[])
        
        
    


    return (
    <div  className="div-fav">
        <h1>Favoritos</h1>
      
<Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
  </thead>
   
  <tbody>
  {!user[0]? "cargando" : user.map((e)=>(
    <tr>
      <td>{e.idProduct}</td>
      <td>{e.title}</td>
      <td>${e.price}</td>
    </tr>
    ))}
  </tbody>
  
</Table>

    </div>

    )
}
export default Fav