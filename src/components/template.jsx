import React from "react";
import Carrinho from "../model/carrinhoModel";
import User from "../model/userModel";
import { Link } from "react-router-dom"

export default function Template({ children, hasBanner }) {
  const carrinho = Carrinho.getCarrinho()
  const user = User.getUser()
 

  function isAuth() {
    if (!user || !user.token)
      return false      
    return true
  }

  function quantidadeTotalDeItems() {
    const items = carrinho.pizza.length
    if (items > 0) {
      return items
    }
  }

  return (
    <div>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container justify-content-between">
          <Link to="/"className="navbar-brand align-items-center" style={{ position: "relative" }}>
            
              <img
                style={{ marginTop: -3 }}
                src="../img/logowhite.png"
                width="20" height="20" alt="imagem" />
              <strong>&nbsp;VitorPizzas</strong>
            </Link>
            {isAuth() ? (
              <div className="d-flex">
                <div className="col-auto ">
                  <span onClick={(e)=>User.removeUser()} className="btn btn-dark btn-sm" type="submit">logout</span>
                </div>
                <div className="col-auto mx-3">
                  <span className="btn btn-dark btn-sm">{user.name}</span>
                </div>
                <a className="rounded-circle" href="/cart" style={{ position: "relative" }}>
                  <img className="" src="../img/cart.png" width="25" alt="cart" style={{ filter: "invert(100)", position: "relative" }} />

                  {quantidadeTotalDeItems() > 0 && (
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "20px", height: "1.3rem", position: "absolute", bottom: "10px", right: "0", transform: "translate(40%,63%)" }}>
                      {quantidadeTotalDeItems()}
                    </div>
                  )}
                </a>
              </div>
            ) :
              <div className="d-flex">
                <div className="col-auto ">
                  <Link to="/login" className="btn btn-dark btn-sm" >Sign in</Link>                 
                </div>
                <div className="col-auto mx-3">
                <Link to="/register" className="btn btn-dark btn-sm" >Register</Link>                 
                </div>
                    
                <Link to="/cart" className="rounded-circle"style={{ position: "relative" }}>
                
                  <img className="" src="../img/cart.png" width="25" alt="cart" style={{ filter: "invert(100)", position: "relative" }} />
                  {quantidadeTotalDeItems() > 0 && (
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "20px", height: "1.3rem", position: "absolute", bottom: "10px", right: "0", transform: "translate(40%,63%)" }}>
                      {quantidadeTotalDeItems()}
                    </div>
                  )}
                
                </Link> 
              </div>
            }
          </div>
        </div>

      </header >

      {hasBanner && (
        <div className="jumbotron jumbotron-fluid" id="jumbotron" style={{
          display: "block", width: "100%",
          height: 250,
          backgroundImage: "url(../img/baner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
        </div>
      )}
      <div>
      </div>
      <div className="container" style={{ minHeight: hasBanner ? "calc(100vh - 352px)" : "calc(100vh - 102px)" }}>
        {children}
      </div>
      <footer className="text-muted" style={{
        background: "#212529",
        padding: "10px"
      }}>
                   <div className="container d-flex flex-wrap justify-content-between align-items-center">

         
            <div className="col-md-4 d-flex align-items-center">
                
                <span className="text-muted">© 2021 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">                
                <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/luis-eduardo-silva-8583a1247/"> <img src="../../img/linkedin.png" width="24" height="24" alt="" /> </a></li>
                
                <li className="ms-3"><a className="text-muted" href="https://github.com/lumier189"> <img src="../../img/github.png" width="24" height="24" alt="" /></a></li>
            </ul>
            </div>
      </footer>
    </div >
  )
}