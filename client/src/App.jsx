function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <button onClick={async () => {
        const response = await fetch('/users')
        const data = await response.json()
        console.log(data)  
      }}>Obtener Datos</button>
    </>
  )
}

export default App