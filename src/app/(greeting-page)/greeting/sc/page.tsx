import { GoodbyeForSC, HelloForSC } from "@/components/server"

const GreetingCCPage = () => {
  return (
    <>
      <h1>Server Component</h1>
      <h2>Hello</h2>
      <HelloForSC />
      <h2>Goodbye</h2>
      <GoodbyeForSC />
    </>
  )
}
export default GreetingCCPage
