import React from "react";

const CovidCard = ({ single }) => {
  return (
    <div
      style={{
        backgroundColor: single.color,
        padding: 30,
        borderRadius: "0px 20px 0px 20px",
        boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {single.i ? (
          <i
            className={single.icon}
            style={{
              color: "white",
              fontSize: 100,
              padding: "0px 30px ",
              marginLeft: "-10vw"
            }}
          />
        ) : (
          <img
            src={single.icon}
            alt={single.name}
            style={{
              height: 100,
              color: "white",
              padding: "0px 30px",
              marginLeft: "-10vw"
            }}
          />
        )}
      </div>
      <h2 style={{ color: "white", textAlign: "right" }}>{single.case}</h2>

      <h1 style={{ color: "white", textAlign: "right" }}>{single.name}</h1>
    </div>
  );
};
export default CovidCard;
