import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import { SinglePropertyPage } from "./pages/index.js";
import { Provider } from "react-redux";
import store from "./store/Store.js";

const Home = lazy(() => import("./pages/Home.jsx"));
const Properties = lazy(() => import("./pages/Properties.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const SignUp = lazy(() => import("./pages/SignUp.jsx"));
const SignIn = lazy(() => import("./pages/SignIn.jsx"));
const ListProperty = lazy(() => import("./pages/ListProperty.jsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/properties",
        element: (
          <Suspense fallback={<Loader />}>
            <Properties />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/list-property",
        element: (
          <Suspense fallback={<Loader />}>
            <ListProperty />
          </Suspense>
        ),
      },
      {
        path: "/singleProperty",
        element: <SinglePropertyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
