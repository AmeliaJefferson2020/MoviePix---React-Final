import React from "react";

const BoxOffice = ({ revenue }) => {
  return (
    <div className="movie__price">
      {!revenue ? (
        <>"N/A"</>
      ) : (
        <>
          {revenue.toLocaleString(undefined, {
            style: "currency",
            currency: "USD",
          })}
        </>
      )}
    </div>
  );
};

export default BoxOffice;
