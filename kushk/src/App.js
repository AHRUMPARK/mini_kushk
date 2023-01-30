// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/admin/Admin';


function App() {
  return (
    <>
      <Admin />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
