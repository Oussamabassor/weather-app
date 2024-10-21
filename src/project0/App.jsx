import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyButton from './prjtest1'
import MyList from './prjtest2'
import Ball3D from './Ball3D'


function App() {
  const [Value, setValue] = useState(1);

  const SelectPrj = () => {
    switch (Value) {
      case 1:
        return <MyButton />;
      case 2:
        return <MyList />;
      case 3:
        return <Ball3D/>
      default:
        return <p>Project not exist !!</p>;
    }
  };

  return (<>
    <h1>prjects react</h1>
    {/* <MyButton /> */}
    {/* <MyList /> */}


    <div>
      <button onClick={() => setValue(1)} style={{"margin":"5px", "position":"absolute", "left":"20vw", "top":"45vh"}}>Project 1</button>
      <button onClick={() => setValue(2)} style={{"margin":"5px", "position":"absolute", "left":"20vw","top":"55vh"}}>Project 2</button>
      <button onClick={() => setValue(3)} style={{"margin":"5px", "position":"absolute", "left":"20vw","top":"65vh"}}>Project 3</button>
    </div>
    <div>{SelectPrj()}</div>
  </>)
}














// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
