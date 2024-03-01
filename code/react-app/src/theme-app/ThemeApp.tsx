import { useEffect, useState } from "react";
import SwitchThemeButton from "./SwitchThemeButton";
import CardContent from "./CardContent";

const ThemeApp = () => {
  const [isDark, setDark] = useState(true);
  return (
    <div
      style={{
        ...styles.main,
        ...(!isDark && styles.mainLightMode),
      }}
    >
      <h1>Theme App</h1>

      <CardContent isDark={isDark} />

      <p>Theme: {isDark ? "Dark Mode" : "Light Mode"}</p>

      <SwitchThemeButton isDark={isDark} switchMode={setDark} />
    </div>
  );
};

const styles: any = {
  main: {
    minHeight: "100vh",
    width: "100vqw",
    color: "white",
    background: "rgb(0, 0, 46)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  mainLightMode: {
    background: "white",
    color: "black",
  },
};

export default ThemeApp;
