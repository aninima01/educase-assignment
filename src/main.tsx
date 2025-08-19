import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";

createRoot(document.getElementById("root")!).render(<Router />);
