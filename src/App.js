import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen min-w-max bg-grayL p-12 font-poppins">
        <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute page="/" />} />
            <Route path="/login" element={<PrivateRoute page="login" />} />
            <Route path="/signUp" element={<PrivateRoute page="signup" />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
