import React ,{lazy , Suspense, useEffect ,useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading

const Grocerry = lazy(() => import("./components/Grocerry"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

  // authentication 

  const [userName , setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Snehal khawshi"
    };

    setUserName(data.name);
    
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value = {{loggedInUser: userName , setUserName}}>
        <div className="">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocerry",
        element: <Suspense fallback={<h1>Fallback</h1>}><Grocerry /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/demo",
        element: (
          <>
          <Demo />
          <Demo2 />
          </>
        )
      }
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)