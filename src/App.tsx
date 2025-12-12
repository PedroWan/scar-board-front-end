import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globals";
import { theme } from "./styles/theme";
import { Home } from "./components/Home";
import Header from "./components/Header";
import CreateProject from "./pages/CreateProject";

type Route = "/" | "/create";

function App() {
  const [route, setRoute] = useState<Route>(
    window.location.pathname === "/create" ? "/create" : "/"
  );

  useEffect(() => {
    const onPop = () => {
      setRoute(window.location.pathname === "/create" ? "/create" : "/");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function navigateToCreate() {
    window.history.pushState({}, "", "/create");
    setRoute("/create");
  }

  type ProjectData = {
    name: string;
    description?: string;
    boardModel?: string;
  };

  function handleCreated(data: ProjectData) {
    console.log("project created", data);
    window.history.pushState({}, "", "/");
    setRoute("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onNewProject={navigateToCreate} />
      {route === "/" && <Home />}
      {route === "/create" && (
        <CreateProject
          onCreate={handleCreated}
          onCancel={() => {
            window.history.pushState({}, "", "/");
            setRoute("/");
          }}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
