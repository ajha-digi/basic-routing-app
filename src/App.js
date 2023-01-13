import { RouterProvider } from "react-router-dom";
import { routers } from "./Routes/routes";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Jobs</li>
          </ul>
        </nav>
      </div>
      <Container maxWidth="md">
        <RouterProvider router={routers} />
      </Container>
    </div>
  );
}

export default App;
