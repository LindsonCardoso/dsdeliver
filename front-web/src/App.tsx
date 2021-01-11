import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
function App() {
  return (
    <>
      <Routes/>

        <ToastContainer />
      
    </>
  );
}

export default App;
