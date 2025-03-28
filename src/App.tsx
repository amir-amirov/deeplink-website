import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";

const DeepLinkPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL (e.g., /deep/123)
  const [state, setState] = useState("Not specified");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      // window.location.href = `https://itunes.com/app/${appId}?mt=8&deep_link=${id}`;
      window.location.href =
        "https://apps.apple.com/kz/app/jaiyq-food/id6743131886";
      console.log("Redirecting to App Store...");
      setState("Redirecting to App Store...");
    } else if (userAgent.includes("android")) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.jaiyq.deliveryapp";
      console.log("Redirecting to Google Play...");
      setState("Redirecting to Google Play...");
    } else {
      console.log("Redirecting to nowhere, its desktop");
      setState("Redirecting to nowhere, its desktop");
    }
  }, [id]);

  return (
    <div className="App">
      <h1>Welcome to Our Website</h1>
      <p>The deep link ID is: {id || "Not specified"}</p>
      <p>Please open this link on a mobile device to use our app.</p>
      <p>Going to: {state && state}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/deep/:id" element={<DeepLinkPage />} />
        <Route path="*" element={<DeepLinkPage />} />{" "}
        {/* Fallback for root or unmatched */}
      </Routes>
    </Router>
  );
};

export default App;
