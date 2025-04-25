import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Blog from "./pages/Blog/Blog"
import Team from "./pages/Team/Team"
import Project from "./pages/Project/Project"
import Research from "./pages/Research/Research"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/blog', element: <Blog /> },
        { path: '/team', element: <Team /> },
        { path: '/project', element: <Project /> },
        { path: '/research', element: <Research /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App