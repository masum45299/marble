import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';

function App() {
  const router=createBrowserRouter([
    {path:'/', element: <Main></Main>,children:([
      {path:'/', element: <Home></Home>},
      {path:'/Home', element: <Home></Home>},
      {path:'/About', element: <Home></Home>},
      {path:'/Journal', element: <Home></Home>},
      {path:'/Service', element: <Home></Home>},
      {path:'/Features', element: <Home></Home>},
      {path:'/Contact', element: <Home></Home>},
    ])}
  ])
  return (
    <div className="App">
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
