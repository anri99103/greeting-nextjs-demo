"use client"
import { useEffect, useState } from "react"

export const GoodbyeForCC = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const fetchHello = async () => {
      const res = await fetch("/api/greeting/goodbye", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Client Component User" }),
      })
      const data = await res.json()
      setMessage(data.message)
    }
    fetchHello()
  }, [])

  return (
    <>
      <p>{message}</p>
    </>
  )
}
