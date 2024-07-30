import { useContext } from "react"
import { PropContext } from "../App.tsx"

const Level3 = () => {
  const { value } = useContext(PropContext)
  return (
    <div>
      <h4>Level 3: {value}</h4>
    </div>
  )
}

export default Level3
