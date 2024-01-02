import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/registration/registration";
import Login from "./pages/login/login";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Registration />}>
        <Route path="/registration" element={<Login />}></Route>
        <Route path="/signin" element={<Login />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
