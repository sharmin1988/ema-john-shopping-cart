import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/Aboute/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Main from './layouts/Main';
import { productAndCartLoader } from './loader/ProductAndCartLoader';
import PrivateRouter from './router/PrivateRouter';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          loader: async() => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: async() => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/shipping',
          element: <PrivateRouter> <Shipping></Shipping></PrivateRouter>
        },
        {
          path: '/inventory',
          element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
