
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Blog } from "./components/blog";
import { Content } from "./components/content";
import { Faq } from "./components/faq";
import { Feature } from "./components/feacture";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { Pricing } from "./components/pricing";
import { Statistic } from "./components/statics";
import { Step } from "./components/step";
import { Team } from "./components/team";
import { Signup } from "./components/signup";
import Login from "./components/login";

function App() {
  return (
    <Router>
    <Nav/>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/content" element={<Content />} />
        <Route path="/step" element={<Step />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;