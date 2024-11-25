import './App.css';
import Footer from './components/Extras/Footer';
import NavigationBar from './components/Extras/NavigationBar';
import { Navigate } from 'react-router';
import { checkToken } from './API/storage';
import UserHome from './components/pages/UserHome';

function App() {
  if (!checkToken()) {
   
    return  <Navigate to ="/Home" />
  }

  return (


    <div className="App">
      <NavigationBar />
      <div className="background">
        <UserHome />
      </div>
      <Footer />
    </div>

  );
}

export default App;
