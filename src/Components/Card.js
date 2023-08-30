import React from 'react'
import { useState } from 'react';
import '../CSSFiles/Card.css'

// display card details
function Card({ x }) {
    const [inputValue, setInputValue] = useState(x.data_value);
    return (
        <div className="Card">
            <div>{x.id}</div>
            {x.data && ((x.data_type === "image") ?
                <img src={x.data_value} alt=""></img>
                : (x.data_type === "progress") ?
                    (<progress value={x.data_value} max="100"></progress>
                    ) : x.data_type === "text" ? (
                        <p>{x.data_value}</p>
                    ) : x.data_type === "tags" ? (
                        <div className="TagsParent">
                            {x.data_value.map((dvalue, i) => {
                                return (
                                    <div key={i} className="Tags">
                                        {dvalue.split(",").map((v, i) => {
                                            return <div key={i} className="tags">{v}</div>;
                                        })}
                                    </div>
                                );
                            })}
                        </div> //if input tags
                    ) : (
                        <input type={x.data_type} value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                            }} />
                    ))
            }
            <h4>{x.card_title}</h4>
            {x.button && (
                <a href={x.redirect}>
                    <button>{x.button_name}</button>
                </a>
            )}
            {x.link && <a href={x.redirect}>{x.link_name}</a>}
            {x.note}
        </div>
    )
}

export default React.memo(Card);