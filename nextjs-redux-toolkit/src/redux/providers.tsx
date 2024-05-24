//un componente padre para todos los
//componenetes un contenedor
"use client";

import { Provider } from "react-redux";
import { store } from "./store"; // Ajusta la ruta según tu estructura de carpetas

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
