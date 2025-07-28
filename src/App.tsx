
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { router } from "./router/routes"
export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

