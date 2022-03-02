import { Product } from "./Components/PageProducts/Product";
import { ThemeProvider, createTheme } from "@mui/material";
import {ProductDetail} from "./Components/productDetails/ProductDetail"
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(244, 51, 151);",
      },
    },
    typography: {
      fontFamily: ["Mier-Book", "Mier-Bold", "Arial", "sans-serif"].join(","),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
        <div style={{ margin: "10% 0px" }}>
          {/* <Product
            fetchURL={
              "https://my-json-server.typicode.com/shubham168/testing_json_server/products"
            }
          /> */}
          <ProductDetail fetchURL={
              "https://my-json-server.typicode.com/shubham168/testing_json_server/products"
            }
            />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
