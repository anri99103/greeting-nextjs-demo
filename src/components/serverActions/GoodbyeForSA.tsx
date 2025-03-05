"use client"
import { useState } from "react"
import { onGreetingGoodbye } from "../../actions/greetingActions"

export const GoodbyeForSA = () => {
  const [message, setMessage] = useState("")

  const handleClick = async () => {
    const data = await onGreetingGoodbye("Server Action User Hanako")
    setMessage(data.message)
  }

  return (
    <div>
      <button onClick={handleClick}>Get Goodbye</button>
      <p>{message}</p>
    </div>
  )
}
