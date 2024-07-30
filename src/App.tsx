import Level1 from "./Components/Level1.tsx"
import { createContext } from "react"

export const PropContext = createContext({
  value: ""
})
const App = () => {
  const propValue = "test message"

  return (
    <PropContext.Provider value={{ value: propValue }}>
      <div>
        <h1>React Context Example</h1>
        <Level1 />
      </div>
    </PropContext.Provider>
  )
}

export default App
