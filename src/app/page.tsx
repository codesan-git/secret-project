import { db } from "@/db"
import { users } from "@/db/schema"

export default async function page() {
  const result = await db.select().from(users)
  return (
    <>
      {JSON.stringify(result)}
    </>
  )
}
