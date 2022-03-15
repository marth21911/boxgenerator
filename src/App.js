import { useState } from 'react';
import './App.css';
import Box from './components/Boxes';


function App() {
  
  const [boxes, setBoxes] = useState([
  ]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event)=>{
    event.preventDefault();
  
    const newState = [...boxes,form];
    setBoxes(newState);

    setForm("");
  }
  
  return (
    <div className="App">
      <h1>Hold on to yo butts</h1>
      <form onSubmit={onSubmitHandler}>
      <input value={form} onChange={(event)=>{setForm(event.target.value)}} type="text" name="addColor" id="addColor" placeholder='add Color'/>
      <input type="submit" />
      </form>
      <div className='boxes'>
      {
        boxes.map((item,i) =>{
        return <Box key = {i} color={item}/>
      })
    }
</div>
    </div>
  );
}

export default App;
