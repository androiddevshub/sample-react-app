import React from "react";

function ComponentOne() {

  const message = "Hello world";
  const array = [1, 3, 5, 7, 9]

  return (
    <div>
      <h1 id="wefwef">I am a first component  {message} </h1>
      {
        array.map(num=> <p>{num}</p>)
      }
    </div>
  )
}

export default ComponentOne;


// export function ComponentTwo() {
//   return (
//     <div>
//       <h1>I am a second component</h1>
//     </div>
//   )
// }

// export function ComponentThree() {
//   return (
//     <div>
//       <h1>I am a third component</h1>
//     </div>
//   )
// }

