import { Suspense } from "react";
import { useRoutes, Route, Routes } from "react-router-dom";
import NotFound from "@/client/pages/404";

export function useRoutesWith404(routes) {
  const routeResult = useRoutes(routes);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {routeResult ? (
        routeResult
      ) : (
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Suspense>
  );
}
