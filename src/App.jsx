import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UsersPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <UsersPage />
    </div>
  );
}

export default App;


