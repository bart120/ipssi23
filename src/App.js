import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './core/components/layout/Menu';
import MainRoutes from './core/routes/MainRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
