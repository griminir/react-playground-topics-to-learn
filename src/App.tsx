import './App.css';
// import AuthProvider from './state-management/auth/AuthProvider';
import Counter from './state-management/counter/Counter';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TaskProvider } from './state-management/tasks';

function App() {
  return (
    <TaskProvider>
      {/* <AuthProvider> */}
      <Counter />
      <NavBar />
      <HomePage />
      {/* </AuthProvider> */}
    </TaskProvider>
  );
}

export default App;
