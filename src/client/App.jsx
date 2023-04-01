import routes from "~react-pages";
import { useRoutesWith404 } from "@/client/lib/hooks";
export default function App() {
  const element = useRoutesWith404(routes);
  return <div className="dark:bg-gray-900">{element}</div>;
}
