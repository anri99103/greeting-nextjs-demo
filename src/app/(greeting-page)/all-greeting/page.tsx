import { GoodbyeForCC, HelloForCC } from "@/components/client"
import { GoodbyeForSC, HelloForSC } from "@/components/server"
import { GoodbyeForSA, HelloForSA } from "@/components/serverActions"

const AllGreetingPage = () => {
  return (
    <>
      <h1>All Greeting</h1>
      <h2>Client Component</h2>
      <HelloForCC />
      <GoodbyeForCC />
      <h2>Server Component</h2>
      <HelloForSC />
      <GoodbyeForSC />
      <h2>Server Actions</h2>
      <HelloForSA />
      <GoodbyeForSA />
    </>
  )
}
export default AllGreetingPage
