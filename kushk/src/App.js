// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/admin/Admin';
import TestMenu from './components/admin/TestMenu';
// import Test from './components/admin/Test';

function App() {
  return (
    <>
      <Admin />
      <TestMenu />
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
