import { BrowserRouter} from 'react-router-dom';
import './App.css';

import AppRouter from './components/AppRouter';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';


function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
          <Header/>
          <main className="main-content">
            <AppRouter/>
            {/* <ReloadButton/> */}
          </main>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
