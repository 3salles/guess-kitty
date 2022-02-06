import { createContext, ReactNode, useContext, useState } from "react";

interface KittyProviderProps {
  children: ReactNode
}

interface KittyContextData {
  isLoading: boolean;
  isCat: boolean;
  resultChecked: boolean;
  setResultChecked: (state: boolean) => void;
  handleOnSend: () => void;
}

const KittyContext = createContext<KittyContextData>({} as KittyContextData)

export const KittyProvider = ({ children }: KittyProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCat, setIsCat] = useState(false);
  const [resultChecked, setResultChecked] = useState(false);

  const handleOnSend = () => {
    setIsLoading(true)
  }

  return (
    <KittyContext.Provider
      value={{
        isLoading,
        isCat,
        resultChecked,
        setResultChecked,
        handleOnSend,
      }}
    >
      {children}
    </KittyContext.Provider>
  )
}

export const useKitty = () => {
  const context = useContext(KittyContext)

  return context
}