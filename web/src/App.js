import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainPage from "./pages/MainPage";
import Articles from "./views/Articles";
import Antimedium from "./views/Antimedium";
import CreatePosts from "./views/CreatePosts";

function App() {
  document.title = "storeapp";
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />}>
            <Route path="/" element={<Articles />} />
            <Route path="/antimedium" element={<Antimedium />} />
            <Route path="/createposts" element={<CreatePosts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
