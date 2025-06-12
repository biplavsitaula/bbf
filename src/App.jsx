import NavBar from "./components/navigation";
import Footer from "./components/footer";
import { Home, About, Services } from "./pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Services,
      },
    ],
  },
]);

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true });

function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <hr />
      <Footer />
    </>
  );
}
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
