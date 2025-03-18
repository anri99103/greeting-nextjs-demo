"use client"
import { useState } from "react"
import { onGreetingHello } from "../../actions/greetingActions"

export const HelloForSA = () => {
  const [message, setMessage] = useState("")

  const handleClick = async () => {
    const data = await onGreetingHello("Server Action User Taro")
    setMessage(data.message)
  }

  return (
    <div>
      <button onClick={handleClick}>Hello</button>
      <p>{message}</p>
    </div>
  )
}
