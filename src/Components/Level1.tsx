import { PropContext } from "../App.tsx"
import Level2 from "./Level2.tsx"

const Level1 = () => {
  return (
    <PropContext.Consumer>
      {(consumerValue) => {
        if (!consumerValue) {
          return <p>No value</p>
        }

        const { value } = consumerValue
        return (
          <>
            <h2>Level 1: {value}</h2>
            <Level2 />
          </>
        )
      }}
    </PropContext.Consumer>
  )
}

export default Level1
