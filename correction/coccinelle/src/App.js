import { BrowserRouter } from 'react-router-dom';
import Footer from './core/components/layout/Footer';
import MainRoutes from './core/routes/MainRoutes';
import Menu from './core/components/layout/Menu';
import './i18n/i18n';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useState } from 'react';
import { ToastContext } from './contexts/ToastContext';
import Toast from './core/components/Toast';


function App() {
  const [toast, setToast] = useState(undefined);
  return (
    <Provider store={store}>
      <ToastContext.Provider value={[toast, setToast]}>
        <BrowserRouter>
          <div>
            <Menu></Menu>

            <div className='container'>
              <MainRoutes />
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </ToastContext.Provider>
    </Provider>
  );
}

export default App;
