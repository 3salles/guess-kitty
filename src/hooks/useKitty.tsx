import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface KittyProviderProps {
  children: ReactNode
}

interface Cat {
  isCat: boolean;
  score: number;
}

interface KittyContextData {
  isLoading: boolean;
  cat: Cat;
  resultChecked: boolean;
  image64: string;
  setImage64: (image: string) => void;
  setResultChecked: (state: boolean) => void;
  handleOnSend: () => void;
}

const KittyContext = createContext<KittyContextData>({} as KittyContextData)

export const KittyProvider = ({ children }: KittyProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cat, setCat] = useState<Cat>({
    isCat: false,
    score: 0
  });
  const [resultChecked, setResultChecked] = useState(false);
  const [image64, setImage64] = useState('')

  const handleOnSend = async() => {
    // Remova este código
    setIsLoading(true)
    setResultChecked(true)
    setCat({isCat: false, score: 0.8 * 100})

    setTimeout(() => {
      setIsLoading(false)
    }, 8000);
    

    // Mantenha estes aqui

    // try{
    //   setIsLoading(true)

    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 3000);
    // const response = await api.post('/predict', {
    //   image: image64
    // })

    // const {is_cat, score} = response.data;

    // const percentageScore = score * 100

    // setCat({
    //   isCat: is_cat,
    //   score: percentageScore
    // })
    // setResultChecked(true)
    // } catch {
    //   setResultChecked(false)
    // }
  }

  return (
    <KittyContext.Provider
      value={{
        isLoading,
        cat,
        resultChecked,
        setResultChecked,
        handleOnSend,
        image64,
        setImage64
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
