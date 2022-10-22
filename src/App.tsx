import React from "react";
import "./App.css";
const Header = React.lazy(() => import("./components/Header"));
const Landing = React.lazy(() => import("./components/Landing"));
const CommentSection = React.lazy(() => import("./components/CommentSection"));
const MainSection = React.lazy(() => import("./components/MainSection"));
const OmegaVideo = React.lazy(() => import("./components/OmegaVideo"));
const FooterSection = React.lazy(() => import("./components/FooterSection"));

const App = () => {
  return (
    <div className="main">
      <Header />
      <Landing />
      <CommentSection />
      <MainSection />
      <OmegaVideo />
      <FooterSection />
    </div>
  );
}

export default App;
