import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/GlobalState';
import '../../styles/header.scss';
import { IoIosCart } from "react-icons/io";

const Header = (props) => {
    const [globalState,] = useContext(ShopContext);
    const [state, setState] = useState({
      headerActive:false,
      scroll:0,
    });
    useEffect(()=>{
        window.addEventListener('scroll', () => useCoor())
      },[]);

      const useCoor = () => {
        let pos = window.pageYOffset;
        if(pos >= 300){
          if (state.scroll > pos ){
            return setState(
              state.scroll = pos,
              state.headerActive = false)
          } else{
           setState(state.scroll = pos)
            return setState({headerActive : true})
          }
        } else if(pos <= 300){
          return setState(
            state.scroll = pos,
            state.headerActive = false
          )
        } 
      }

    return (
    <div className={state.headerActive === true ? "Header wrapper xd" : "Header wrapper"}>
    <Link to="/"><h1>PetsDom</h1></Link>
    <Link to="/productos"><h3>Productos</h3></Link>
    <Link to="/servicios"><h3>Servicios</h3></Link>
    <Link to="/adopciones"><h3>Adopciones</h3></Link>
    <Link to="/contactos"><h3>Contactos</h3></Link>
    <Link to="/cart"><IoIosCart/><span>{globalState.cart}</span></Link>
    </div>)
};

export default Header;