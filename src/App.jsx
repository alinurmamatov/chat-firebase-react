import './App.css';
import AppRouter from './router/AppRouter';
import { AuthState } from './context/AuthContext';

function App() {
  return (
    <AuthState>
      <AppRouter/> 
    </AuthState>
  );
}

export default App;
