import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import UserHome from './components/pages/UserHome';
import Transactions from './components/pages/Transactions';
import Users from "./components/pages/Users";
import Profile from "./components/pages/Profile";
import NavigationBar from './components/Extras/NavigationBar';
import Footer from './components/Extras/Footer';
import Home from './components/pages/Home';

const myRouter = createBrowserRouter ([
  {path: "/",
    element: <App />,

  },
  {path: "/Home",
    element: <div>
<NavigationBar  />
<Home />
<Footer  />
    </div> ,

  }, {path: "/UserHome",
    element: <div>
<NavigationBar  />
<UserHome />
<Footer  />
    </div> ,

  },
  {path: "/Transactions",
    element: <div>
<NavigationBar />
<Transactions /> 
<Footer />
</div>,

  },
  {path: "/Users",
    element: <div>
<NavigationBar />
<Users />
<Footer />
 </div>,

  },
  {path: "/Profile",
    element: <div>
<NavigationBar />
<Profile /> 
<Footer />
</div>,

  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={myRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
