import React, { memo, useState } from "react";
import style from "./style.module.css";
import Fan from "./subComponents/Fan/Fan";
import Talent from "./subComponents/Talent/Talent";

const FormFields = memo(() => {
  const [fan, setFan] = useState(true);
  var type = fan ? "Fan" : "Talent";

  return (
    <div className={style.form}>
      <input type="checkbox" checked={fan} onChange={() => setFan(!fan)} />
      <div>{`Create Your ${type} Account`}</div>
      
      {fan ? <Fan /> : <Talent />}
    </div>
  );
});

export default FormFields;
