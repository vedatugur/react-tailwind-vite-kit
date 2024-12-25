import React from "react";
import AppRouter from "./router/AppRouter";
import { NextUIProvider } from "@nextui-org/react";
import { useHref, useNavigate } from "react-router-dom";
import "../css/style.css";
const App: React.FC = () => {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <main className="brand-light text-foreground bg-background">
        <AppRouter />
      </main>
    </NextUIProvider>
  );
};

export default App;
