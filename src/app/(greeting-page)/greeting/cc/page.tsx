import { GoodbyeForCC } from "@/components/client/GoodbyeForCC"
import { HelloForCC } from "@/components/client/HelloForCC"

const GreetingCCPage = () => {
  return (
    <>
      <h1>Client Component</h1>
      <h2>Hello</h2>
      <HelloForCC />
      <h2>Goodbye</h2>
      <GoodbyeForCC />
    </>
  )
}
export default GreetingCCPage
