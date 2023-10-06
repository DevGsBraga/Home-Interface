import { Feed } from './pages/Feed';
import { Home } from './pages/Home'
import { Login } from "./pages/Login";

import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
