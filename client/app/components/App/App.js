import React, {useEffect, useContext} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../styles/index.scss';



const App =({children})=>{
/*     useEffect(()=>{
      window.addEventListener('scroll', ()=> useCoor())
    },[]);
    const useCoor = () => {
      console.log(window.pageYOffset)
    }; */
    return(
      <div className="App">
      <Header/>
      {children}
      <Footer/>
      </div>
    )
    };

export default App;
