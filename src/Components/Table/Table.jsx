import React from "react";
import style from "./Table.module.scss";

const Table = (props) => {
  const { box } = props;

  return (
    <div className={style.table}>
      <div className={style.tableHeader}>
        <div className={style.tableSection1}>
          Combo Name
        </div>
        <div className={style.tableSection2}>
        
          Dishes
        </div>
        <div className={style.tableSection3}>
        
          Price
        </div>
        {/* <div className={style.tableSection4}>
          
          <div className={style.text}>Nutrients</div>
        </div> */}
      </div>

      {box.map((bx) => (
        <div className={style.tableContent}>
          <div className={style.tableSection}>
            <div className={style.tableSection1}>{bx.type}</div>
            <div className={style.tableSection2}>{bx.dishes}</div>
            <div className={style.tableSection3}>
                {bx.price}
            </div>
          </div>
          {/* <div className={style.breakLine}></div> */}
        </div>
      ))}
    </div>
  );
};

export default Table;