import React,{useState, useContext} from 'react'
import './footer.css'

const Footer = () =>{


    return (
    <div className="container-footer">
        
        <div className="div-logo-footer">
        <img className="img-footer" src="https://ci4.googleusercontent.com/proxy/TAjJzmUy2J_-J9dSfiOjoTQf1G4ZS5dK_JAraI3OsqsGCMmjsK1quCnL1tL-PFZcDNN1t5dBIbvtHOStbELHoMTwVIs67l-LAhF-TegDAGaxZrx48Vm_oibtazOs8ug47P3q1fEjKHKOb8Woy59wuLm78g2MhuIA2CMeItVeCSzWdnXcOeU051_8DcoJiJo09wY6ozVSqD76DW8l3A=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1KofXWAwNmTJEvBA3WLurCckKq30TlmZ4&revid=0B9WXKUu-DHCZRTU0QzZqa2JGRHVZWFBNcW9iNnNwSUQ5R2tnPQ"></img>
        </div>
        <div className="div-info-footer">
            <div>
                <h3 className="tipografia-footer-h3">Nosotros</h3>
                <br></br>
               <a className="link-footer" href="https://www.preki.com/nosotros/">Quienes somos</a>
               <hr></hr>
               <a className="link-footer" href="https://www.preki.com/equipo/" >Equipo</a>
            </div>
            <div>
                <h3 className="tipografia-footer-h3">Soporte</h3>
                <br></br>
                <a className="link-footer" href="https://www.preki.com/contact/" >Ayuda</a>
                <hr></hr>
                <a className="link-footer" href="https://prekicore.s3.us-east-2.amazonaws.com/Docs/T%C3%89RMINOS+Y+CONDICIONES+DE+USO
                +GOPREKI+S.A.S+-+Preki+Central.pdf" >Términos y Codiciones</a>
                <hr></hr>
                 <a className="link-footer" href="https://prekicore.s3.us-east-2.amazonaws.com/Docs/POLI%CC%81TICA+DE+PRIVACIDAD+Y+DATOS+PERSONALES+GOPREKI+S.A.S+-+Preki+Central.pdf" >Politica de Datos</a>
            </div>
            <div>
                <h3 className="tipografia-footer-h3">Comunidad</h3>
                <br></br>
                <a className="link-footer" href="https://www.instagram.com/go.preki/" >Instagram</a>
                <hr></hr>
                <a className="link-footer" href="https://www.facebook.com/gopreki" >Facebook</a>
                <hr></hr>
                <a className="link-footer" href="https://twitter.com/GoPreki" >Twitter</a>
                <hr></hr>
                <a className="link-footer" href="https://www.linkedin.com/company/gopreki/" >Linkedln</a>
            </div>
        </div>
    </div>

    )
}
export default Footer