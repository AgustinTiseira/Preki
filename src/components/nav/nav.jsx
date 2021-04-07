import React,{useState, useContext} from 'react'
import Nav from 'react-bootstrap/Nav'
import {Navbar,Form,FormControl,Button } from 'react-bootstrap'
import {AppContext} from '../../applications'
import "./nav.css"

const SearchBar = () =>{
  const [buscar, setBuscar] = useState({
    producto:""
  });

  
   const [search,setSearch] = useContext(AppContext);
   

  const handleChange =(e) =>{
      setBuscar({ ...buscar, producto: e.target.value });
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSearch(buscar.producto)
  }

    return (
<Navbar className="navbar-nav"  expand="lg">
  <Navbar.Brand className="tipografia" href="/"><span className="tipografia">Preki</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="/"><span className="tipografia">Catalogo</span></Nav.Link>
      <Nav.Link  href="https://play.google.com/store/apps/details?id=com.preki"><span className="tipografia">Descargate la app</span>
      </Nav.Link>
      <Nav.Link  href="http://localhost:3000/fav"><span className="tipografia">Favoritos</span>
      </Nav.Link>
    </Nav>
    <Form onClick={handleSubmit} inline>
      <FormControl name="producto"
                value={buscar.producto}
                onChange={handleChange}
                 type="text"
                  placeholder="Search"
                   className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    )
}
export default SearchBar