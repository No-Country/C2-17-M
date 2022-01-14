import './assets/estilos/css/estilos.css'
import Layout from './components/Layout';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';


function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Switch>
            <Route path='/' component={Login} exact />
            <Layout>
            <Route path='/dashboard' component={Dashboard} exact />
            <Route path='/customers' component={Customers} exact />
            </Layout>
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    );
}

export default App;
