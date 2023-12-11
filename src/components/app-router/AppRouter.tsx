import { FC } from "react";

import { publicRoutes } from "../../routes/routes";
import { Navigate, Route, Routes } from "react-router";

const AppRouter: FC = () => {
  return (
    <Routes>
      {
        publicRoutes.map((route, id) =>
          <Route key={id} path={route.path} element={route.element}/>
        )
      }
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRouter