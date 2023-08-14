import './App.css';
import StudentCrud from './components/StudentCrud';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <StudentCrud />
    </div>
  );
}

export default App;
