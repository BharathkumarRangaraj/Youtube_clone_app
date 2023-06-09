
import * as React from "react";

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './utils/store';
import { Provider } from 'react-redux'
import Maincontainer from './Components/Maincontainer';
import Watchpage from './Components/Watchpage';

const router=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[{
    path:'/',
    element:<Maincontainer/>
  },
{
  path:'watch',
  element:<Watchpage/>
}]
}])



function App() {
  return (
    <Provider store={store}>
    <div>
   
      
      <Header/>
     
      <RouterProvider router={router}/>
     
      <Body/>
     
      
    </div>
    </Provider>
 
  );
}

export default App;
