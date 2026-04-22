import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScholarshipPage from "./pages/ScholarshipPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/scholarships" />} />{" "}
        <Route path="/scholarships" element={<ScholarshipPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
