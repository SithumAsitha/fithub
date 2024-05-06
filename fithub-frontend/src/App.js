import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Authentication from './Components/Authentication/Authentication';
import HomePage from './Components/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={true?<HomePage/>:<Authentication/>}>
        
        </Route>
      </Routes>

    </div>
  );
}

export default App;
