import { useEffect, useRef, useState } from "react";

const TimeNowApp = () => {
  const [now, setNow] = useState(new Date());

  const intervalRef = useRef<any>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={styles.main}>
      <h1 onClick={() => clearInterval(intervalRef.current)}>
        {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}
      </h1>
    </div>
  );
};

const styles: any = {
  main: {
    fontSize: 150,
    minHeight: "100vh",
    width: "100vqw",
    color: "white",
    background: "rgb(0, 0, 46)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default TimeNowApp;
