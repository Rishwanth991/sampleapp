
import './App.css';
import Roh from './Roh';
import Ris1 from './Ris1';
import Data from './Data';
import Tdata from './Tdata';
import Dummy from './Dummy';

function App()
{
    return(
    <div className="App">
      <img src="pic3.jpg" style={{ width: '100px', height: '100px' }} />
      <h1 style={{ color: 'blue' }}>React Reality</h1>
      <center><table width='80%' border="1px">
       
          <tr>
            <td>
              <Roh />
            </td>
            </tr>
            <tr>
              <td>
             <Ris1 />
              </td>
            </tr>
            </table>
            </center>
              
            
          

          
          <center >
            <table>
            
          <tr>
            
           
            
            
             <td colSpan={2}>
              <Data/>
            </td>
            </tr>
            <tr>
              <td colSpan={2}>
              <Tdata/>
              </td>
            </tr>
            

            </table>
            </center>
           
          <Dummy/>
          
          
          
         
        
      
      </div>
     
     
    
  );
}

export default App;


