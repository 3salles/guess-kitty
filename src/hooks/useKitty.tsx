import { createContext, ReactNode, useContext, useState } from "react";

interface KittyProviderProps {
  children: ReactNode
}

interface KittyContextData {
  isLoading: boolean;
}

const KittyContext = createContext<KittyContextData>({} as KittyContextData)

export const KittyProvider = ({ children }: KittyProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <KittyContext.Provider
      value={{
        isLoading
      }}
    >
      {children}
    </KittyContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(KittyContext)

  return context
}