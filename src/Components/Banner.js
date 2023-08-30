import { Link } from "react-router-dom";
import React from "react";
import "../CSSFiles/Banner.css";
import { useEffect, useState } from "react";
import { bannersArray } from "../JsonData/data";
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md';

// Automatic slide banners
function Banner() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => (prevState + 1) % bannersArray.length)
    }, 3000)

    // clean up the interval when component unmounts or count value updated.
    return () => { clearInterval(interval) };
  }, [count])
  return (
    <div className="AllBanners">
      <MdArrowForwardIos className="forward" onClick={()=>setCount((prevCount)=>(prevCount===bannersArray.length-1?0:prevCount+1))}/>
      {bannersArray.map((x, index) => {
        return (index === count) &&
          <div className="BannerParent" key={x.id_no}>

            <div className="Banner">
              <h2>{x.id.toUpperCase()}</h2>
              <div>{x.text}</div>
            </div>
            {x.button && (
              <Link to={x.link}>
                <button>{x.btn_name}</button>
              </Link>
            )}

          </div>
      })}
      <MdArrowBackIosNew className="backward" onClick={()=>setCount((prevCount)=>(prevCount===0?bannersArray.length-1:prevCount-1))}/>
    </div>
  );
}
export default Banner;