import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function ProtectedRoute({ children }) {
  const { auth } = useContext(AuthContext);
  return auth ? children : <Navigate to="/" replace />;
}