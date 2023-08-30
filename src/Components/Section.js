import React from 'react'
import { useState } from 'react';
import { sectionArray, cardArray } from '../JsonData/data';
import Card from './Card';
import '../CSSFiles/Section.css'

// display card details based on sections
function Section() {
    const [cardsState, setCardsState] = useState([false, false, false]);

    function handleIncrementClick(index) {
        const nextCardsState = cardsState.map((c, i) => {
            if (i === index) {
                return !c;
            } else {
                return c;
            }
        });
        setCardsState(nextCardsState);
    }
    return (

        <div className="sectionParent">
            {sectionArray.map((sec, i) => {
                return (
                    <div className="SingleSectionParent" key={i}>
                        <div>
                            <h2>{sec.title}</h2>
                            <button onClick={() => { handleIncrementClick(sec.sec_no - 1) }}>
                                {!cardsState[sec.sec_no - 1] ? `See All` : `See Less`}
                            </button>
                        </div>
                        {cardsState[sec.sec_no - 1] ? (
                            <section className="sectionCards">
                                {cardArray.filter((cardObj) => {
                                    return sec.sec_no === cardObj.parent_sec_no;
                                }).map((x) => {
                                    return (
                                        <div key={x.id}>
                                            <Card x={x}></Card>
                                        </div>
                                    );
                                })}
                            </section>
                        ) : (<section className="sectionCards">
                            {cardArray.filter((cardObj) => {
                                return sec.sec_no === cardObj.parent_sec_no;
                            }).map((x) => {
                                return (
                                    <div key={x.id}>
                                        <Card x={x}></Card>
                                    </div>
                                );
                            }).slice(0, 3)
                            }
                        </section>)}
                    </div>
                )
            })}

        </div>
    )
}

export default React.memo(Section);