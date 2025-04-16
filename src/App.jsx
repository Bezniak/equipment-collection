import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ROUTES} from "./config/routes.js";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import Services from "./components/Services/Services.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";


const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <div className="flex-grow-1">
                <Outlet/>
                <ScrollToTopButton />
            </div>
            <Footer/>
        </div>
    );
};


const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home/>
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound/>
                },
                {
                    path: ROUTES.ABOUT_US,
                    element: <AboutUs/>
                },
                {
                    path: ROUTES.SERVICES,
                    element: <Services/>
                },
                {
                    path: ROUTES.CONTACT,
                    element: <Contacts/>
                },
                {
                    path: ROUTES.PP,
                    element: <PrivacyPolicy/>
                },
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;