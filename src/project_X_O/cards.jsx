import React, { useState } from 'react';
import style_prj1 from "./cards.module.css"



function MyCard() {
    const [Mark, setMark] = useState('');

    const clickcard = () => {
        Mark === 'X' ? setMark('O') : setMark('X');
    };

    return (
    <>
        <button className='card' onClick={clickcard}>{Mark}</button>
    </>
    );
}

// function MyList() {
//     return (
//             user.forEach((u)=> {
//                     <>
//                         <span>{u.name}</span>
//                         <span>{u.age}</span>
//                     </>
//             })
//     )
// }
export default MyCard