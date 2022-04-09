import React, {Fragment} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {routes} from "./config/routes-config";
import Header from "./components/ui/header";
import config from "./config/config.json";

function App() {
  return (
      <Fragment>
          <Header
              logoName={config.applicationName}
              docsLink={config.urlToApiDoc}
          />
          <BrowserRouter>
              <Routes>
                  {routes.map(r => (
                      <Route key={r.path} path={r.path} element={r.element} />
                  ))}
                  <Route path='*' element={<Navigate to={routes[0].path} />} />
              </Routes>
          </BrowserRouter>
      </Fragment>
  );
}

export default App;
