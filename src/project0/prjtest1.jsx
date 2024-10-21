import React, { useState } from 'react';
import style_prj1 from "./prj1.module.css"
import imgsrc1 from './capucheH1.png'
import imgsrc2 from './capucheH3.jpg'


function MyButton() {
    const [count, setCount] = useState(0); // Set initial state to 0

    const clickbtn = () => {
        setCount(count + 1); // Update state when button is clicked
    };

    return (
    <>
        {
        count % 2 === 0 ? (
            <>
                <h2 className={style_prj1.subtitle1}>orange capuche</h2>
                <img src={imgsrc1} alt="Even Image" />
            </>
        ) : (
            <>
                <h2 className={style_prj1.subtitle2}>green capuche</h2>
                <img src={imgsrc2} alt="Odd Image" />
            </>
        )
        }

        <button className='btn btn-primary' onClick={clickbtn}>Click to switch</button>
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
export default MyButton