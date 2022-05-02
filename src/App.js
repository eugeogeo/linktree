
import './App.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="geral">

      <div className="head">

        <div className="picture">
          {/*arruma o MUI */}

                  
          {/* <Avatar 
            alt="fotinha" 
            sx={{ width: 100, height: 100 }}
            src="https://yt3.ggpht.com/ytc/AKedOLRJFxojUGx7u06lBjilcCYrHQyLt9k678A5Uef2=s900-c-k-c0x00ffffff-no-rj" 
          />   */}
            
          <img className="icon" src = "https://yt3.ggpht.com/ytc/AKedOLRJFxojUGx7u06lBjilcCYrHQyLt9k678A5Uef2=s900-c-k-c0x00ffffff-no-rj"></img>
          
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
    </div>
  );
}

export default App;
