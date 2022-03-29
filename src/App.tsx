import { createGlobalStyle } from "styled-components";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
},
body {
  font-family: 'Roboto', sans-serif;
},
a {
  text-decoration: none;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList></TodoList>
    </>
  );
}

export default App;
