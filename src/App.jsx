import Home from "./Pages/Home"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Works from "./Pages/Works"
import Works_cc3 from "./Pages/Works_cc3"

import { Routes, Route } from "react-router"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      
      <Route path="/works" element={<Works />}></Route>
      <Route path="/works_cc3" element={<Works_cc3 />} />
    </Routes>
    </>
  )
}

export default App
