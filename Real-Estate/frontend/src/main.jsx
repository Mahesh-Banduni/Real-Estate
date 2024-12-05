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
const Wishlist = lazy(() => import("./pages/Wishlist.jsx"));
const Recommendation = lazy(() => import("./pages/Recommendation.jsx"));
const HandpickedPage = lazy(() => import("./pages/HandpickedPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.jsx"));
const OwnedProperties = lazy(() => import("./pages/OwnedProperties.jsx"));
const OtpPage = lazy(() => import("./pages/OtpPage.jsx"));
const Auction = lazy(() => import("./pages/AuctionProperty.jsx"));
const Forgot = lazy(() => import("./pages/ForgotPassword.jsx"));
const Confirm = lazy(() => import("./pages/ConfirmPassword.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyAndPolicy.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Disclaimer = lazy(() => import("./pages/Disclaimer.jsx"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndConditions.jsx"));

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
        path: "/recommendation",
        element: (
          <Suspense fallback={<Loader />}>
            <Recommendation />
          </Suspense>
        ),
      },
      {
        path: "/handpicked",
        element: (
          <Suspense fallback={<Loader />}>
            <HandpickedPage />
          </Suspense>
        ),
      },
      {
        path: "/owned-properties",
        element: (
          <Suspense fallback={<Loader />}>
            <OwnedProperties />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Loader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: "/otp",
        element: (
          <Suspense fallback={<Loader />}>
            <OtpPage />
          </Suspense>
        ),
      },
      {
        path: "/singleProperty",
        element: <SinglePropertyPage />,
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback={<Loader />}>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "/auction",
        element: (
          <Suspense fallback={<Loader />}>
            <Auction />
          </Suspense>
        ),
      },
      {
        path: "/forgot",
        element: (
          <Suspense fallback={<Loader />}>
            <Forgot />
          </Suspense>
        ),
      },
      {
        path: "/confirm",
        element: (
          <Suspense fallback={<Loader />}>
            <Confirm />
          </Suspense>
        ),
      },
      {
        path: "/privacy",
        element: (
          <Suspense fallback={<Loader />}>
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/disclaimer",
        element: (
          <Suspense fallback={<Loader />}>
            <Disclaimer />
          </Suspense>
        ),
      },
      {
        path: "/termsandconditions",
        element: (
          <Suspense fallback={<Loader />}>
            <TermsAndCondition />
          </Suspense>
        ),
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
