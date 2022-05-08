
import './App.css';
import { useState } from 'react';


function App() {

  document.body.setAttribute('data-theme', 't-light');

  const button = document.querySelector('.js-theme');

   const themes = {
     't-dark': 't-light', 
     't-light': 't-dark',
   }

   const theme = 't-light';
  const [ flagMode, setFlagMode ] = useState(false);    
  
  const changeFlagMode = () => { //flag de apoio ao darkmode
      setFlagMode(!flagMode);
  }

  if(button){ //toda vez q o botão é chamado ele confere as opções
    if(flagMode === true){
      //console.log("oi modo 0") // teste
      document.body.setAttribute('data-theme', 't-black');
    }else{
      //console.log("oi modo 1") //teste
      document.body.setAttribute('data-theme', 't-light');
    }
  }


  return (
    <div className="geral">
      <body>

      
      <div className="head">

      <button className="js-theme"
        onClick={changeFlagMode}
        type="button">
        darkmode
      </button>

        <div className="picture">
          {/*arruma o MUI */}

                  
          {/* <Avatar 
            alt="fotinha" 
            sx={{ width: 100, height: 100 }}
            src="https://yt3.ggpht.com/ytc/AKedOLRJFxojUGx7u06lBjilcCYrHQyLt9k678A5Uef2=s900-c-k-c0x00ffffff-no-rj" 
          />   */}
            
          <img 
            className="icon" 
            src = "./public/utfpr.png"
            />

          
        </div>

        <div className="infos">
          <div className="username">
            @marvel
          </div>
          <div className="slogan">
            escrever um slogan aqui 
          </div>
        </div>

      </div>

      {/* <div className="links">
        <Button variant="contained">Contained</Button>
      </div> */}
      </body>
    </div>
  );
}

export default App;
