import { GoodbyeForSA, HelloForSA } from "@/components/serverActions"

const GreetingSAPage = () => {
  return (
    <>
      <h1>Server Actions</h1>
      <h2>Hello</h2>
      <h3>Client Components</h3>
      <HelloForSA />
      <h2>Goodbye</h2>
      <h3>Client Components</h3>
      <GoodbyeForSA />
    </>
  )
}
export default GreetingSAPage
