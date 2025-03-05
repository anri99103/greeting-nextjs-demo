"use server"

export async function onGreetingHello(name: string) {
  const res = await fetch("http://localhost:3000/api/greeting/hello", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })

  return res.json()
}

export async function onGreetingGoodbye(name: string) {
  const res = await fetch("http://localhost:3000/api/greeting/goodbye", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })

  return res.json()
}
