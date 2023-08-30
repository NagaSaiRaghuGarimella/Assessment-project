import { Link } from "react-router-dom";
import React from "react";
import "../CSSFiles/Banner.css";
import { useEffect, useState } from "react";
import { bannersArray } from "../JsonData/data";

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
      {bannersArray.map((x, index) => {
        return (index === count) &&
          <div className="BannerParent" key={x.id_no}>

            <div className="Banner">
              <h2>{x.id.toUpperCase()}</h2>
              <div>{x.text}</div>
            </div>
            {x.button && (
              <Link to={x.link}>
                <button className="btn">{x.btn_name}</button>
              </Link>
            )}

          </div>
      })}
    </div>
  );
}
export default Banner;