import { h, render, useState } from '../../src'

function Counter() {
  const [up, setUp] = useState(0)
  const [down, setDown] = useState(0)
  return (
    <div class="counter">
      <h1>{up}</h1>
      <button onClick={() => setUp(up + 1)}>+</button>
      <h1>{down}</h1>
      <button onClick={() => setDown(down -1)}>-</button>
      {/* <Sex /> */}
    </div>
  )
}

// function Sex() {
//   const [sex, setSex] = useState('boy')
//   return (
//     <div>
//       <h1>{sex}</h1>
//       <button onClick={()=>{sex === 'boy' ? setSex('girl') : setSex('boy')}}>x</button>
//     </div>
//   )
// }

render(<Counter />, document.getElementById('app'))
