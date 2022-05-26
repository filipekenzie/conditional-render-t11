function Switch({ setIsLight, isLight }) {

  const handleBulb = () => {
    setIsLight(!isLight);
  };

  return <button onClick={handleBulb}>{isLight ? "OFF" : "ON"}</button>;
}

export default Switch;
