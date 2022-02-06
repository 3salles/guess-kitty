import { useKitty } from "../../../hooks/useKitty"
import { AppLayout } from "../../../layout/AppLayout"
import { Loader } from "../../ui/Loader"
import { Home } from "../home"

export const Main = () => {
  const {isLoading} = useKitty();

  return (
    <AppLayout>{isLoading ? <Loader /> : <Home />}</AppLayout>
  )
}