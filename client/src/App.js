import './assets/estilos/css/estilos.css'
import Layout from './components/Layout';
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Layout>
      </Layout>
      </BrowserRouter>
      </ThemeProvider>
    );
}

export default App;
