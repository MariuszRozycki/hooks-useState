

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const handler = () => setCounter(counter + 1)


  return (
    <div>
      <h1>{counter}</h1>
      <p>Counter</p>
      <button onClick={handler}>Click here!</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));