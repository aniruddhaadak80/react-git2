import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <>
     {/* start of center tag */}
     <center>

     {/* first div for greeting to react  */}

     <div style={{backgroundColor:"red" , height:"300px" ,width:"600px"}}>
      <h1>Hii React...</h1>
      <h2>I came back...</h2>
      <button>click me </button>
      <br/>
      <br/>  
      <img  style={{height:"120px",width:"300px"}} src='https://i.pinimg.com/564x/cb/a0/b8/cba0b89d2bf2d96a1ed26edb5849f804.jpg' alt='react logo'/>  
      
      <br/> 
      <br/> 
     {/* nested div of 1st div  */}
      <div style={{backgroundColor:"green" , height:"200px" ,width:"400px"}}  >
<h2>love you 💖💖💖💖💖💖 </h2>
<marquee behavior="alternate">I am Ani</marquee>
<h3>corporate world 👇👇👇</h3>
<img  style={{height:"300px",width:"400px"}} src='https://image.lexica.art/full_jpg/34a3cc91-a6f8-43dc-9875-8ec0e3fb4df9'/>

      </div>

      <br/>
      <br/>



     </div>
     
     
     </center>
     {/* end of center tag */}
     </>
  );
}

export default App;
