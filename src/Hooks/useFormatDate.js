import jalaali from "jalaali-js";

const useFormatDate = (dateString) => {
  if (!dateString) return "-";
  const d = new Date(dateString);
  const { jy, jm, jd } = jalaali.toJalaali(d);

  // const hours = d.getHours().toString().padStart(2, "0");
  // const minutes = d.getMinutes().toString().padStart(2, "0");

  // return `${jy}/${jm.toString().padStart(2, "0")}/${jd
  //   .toString()
  //   .padStart(2, "0")}  |  ${hours}:${minutes}`;


  return `${jy}/${jm.toString().padStart(2, "0")}/${jd
    .toString()
    .padStart(2, "0")}`;

};

export default useFormatDate;