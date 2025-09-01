import React from "react";
import jalaali from "jalaali-js";

function Today() {
  const today = new Date();

  const { jy, jm, jd } = jalaali.toJalaali(today);

  return (
    <>
      {jy}/{jm}/{jd}
    </>
  );
}

export default Today;
