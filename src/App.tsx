import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return <div>hello</div>;
}

export default App;
