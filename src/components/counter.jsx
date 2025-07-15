const Counter = ({count,Increment,Decrement,Reset}) => {
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={Increment}>Increse</button>
      <button onClick={ Decrement}>Decrese</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}
export default Counter;

