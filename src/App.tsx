import MainLayout from "./components/layouts/MainLayout";
import { ThemeProvider } from "@/providers/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout />
    </ThemeProvider>
  );
};
export default App;
