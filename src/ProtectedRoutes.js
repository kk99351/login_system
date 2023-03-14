import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest
export default function ProtectedRoutes(props) {
        const token = cookies.get("TOKEN");
        // returns route if there is a valid token set in the cookie
        if (token) {
          return props.children;
        } else {
          // returns the user to the landing page if there is no valid token set
          return (
            <Navigate to="/" replace />
          );
        }
}