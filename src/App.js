

import './App.css';
import Item from './components/Navbar/Navbar.';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return ( 
    
    <div className="App">
      <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path ='/' element={<ItemListContainer/>}/>
          <Route path ='/category/:categoryId' element = {<ItemListContainer/>} />
          <Route path ='/item/:itemId' element ={ <ItemListContainer/>} />
          <Route path ='*' element = {<h1> 484 NOT FOUND</h1>} />

          
        </Routes>
      </Navbar>
      </BrowserRouter>
      <Navbar/> 
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount initial ={1} stock ={10} onAdd = {(quantity) => console.log ('Cantidad agregada' , quantity)} />
    </div>
  );
}

export default App;