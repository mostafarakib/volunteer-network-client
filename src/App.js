import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Donations from "./components/Donations/Donations";
import DetailedEvent from "./components/Events/DetailedEvent";
import Events from "./components/Events/Events";
import NewEvent from "./components/Events/NewEvent";
import UpdateEvent from "./components/Events/UpdateEvent";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/createEvent" element={<NewEvent />} />
        <Route path="/events/update/:eventId" element={<UpdateEvent />} />
        <Route path="/events/:eventId" element={<DetailedEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
