import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import BookingDate from "../../Pages/BookingDate/BookingDate";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/booking-date',
                element: <BookingDate></BookingDate>
            }
        ]
    }
])