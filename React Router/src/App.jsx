import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import BlogList from "./components/BlogList";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />}>
          <Route path=":postID" element={<Blog />}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}
export default App;


/*  
  Child prijungimas:

        App.jsx pagrindiniame komponenente prirašome:
        <Route path="/blog" element={<BlogList />}> ------ čia yra tėvas
          <Route index element={<Child />} />  ---- čia yra vaikas.
        </Route> 
        - Iš tėvinio /blog elemento prijungiame kartu ir Child elementa. Tai kaip pavizdys rašome: localhost/blog kartu atvaizduojamas ir Child komponentas.

        - Prijunge child elementą turime Bloglist.jsx komponente :
        import { Outlet } from "react-router";
        prirašyti Outlet Blog elemente. <Outlet /> 


        Pridedame child komponentą tėviniam BlogList

       <Route path=":postID" element={<Blog />}/>

      Child route yra kintantis t.y jog rašant localhost/bloglist/3 , 4 ar boa


*/  