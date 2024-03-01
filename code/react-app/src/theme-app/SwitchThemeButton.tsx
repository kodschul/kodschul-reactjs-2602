type SwitchThemeButtonProps = {
  isDark: boolean;
  switchMode: (isDark: boolean) => void;
};

const SwitchThemeButton = (props: SwitchThemeButtonProps) => {
  return (
    <button onClick={() => props.switchMode(!props.isDark)}>
      {props.isDark ? "Switch lights on" : "Switch lights off"}
    </button>
  );
};

export default SwitchThemeButton;
