import { createContext, useState } from "react";

export const GeneralContext = createContext();

export function GeneralContextProvider({ children }) {
  const [test, setTest] = useState(1);
  return (
    <GeneralContext.Provider value={{ test }}>
      {children}
    </GeneralContext.Provider>
  );
}
