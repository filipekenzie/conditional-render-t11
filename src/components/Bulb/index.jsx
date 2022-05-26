import { AiFillBulb } from "react-icons/ai";

function Bulb({ isLight }) {
  return (
    <>
      {/* {isLight ? (
        <AiFillBulb style={{ color: "yellow", fontSize: "240px" }} />
      ) : (
        <AiFillBulb style={{ color: "gray", fontSize: "240px" }} />
      )} */}
  {/* 
      <AiFillBulb
        style={{ color: isLight ? "yellow" : "gray", fontSize: "240px" }}
      /> */}

      {isLight && <AiFillBulb style={{ color: "yellow", fontSize: "240px" }} />}
    </>
  );
}

export default Bulb;
