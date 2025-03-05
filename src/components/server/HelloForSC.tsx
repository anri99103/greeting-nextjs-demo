export const HelloForSC = async () => {
  const res = await fetch("http://localhost:3000/api/greeting/hello", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Server Component User" }),
  })
  const data = await res.json()

  return (
    <>
      <p>{data.message}</p>
    </>
  )
}
