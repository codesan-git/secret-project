import { db } from "@/db"
import { users } from "@/db/schema"
import User from "./User"
import Content from '@/app/tanstack/Content'
export default async function page() {
  // const result = await db.select().from(users)
  return (
    <>
      {/* {JSON.stringify(result)} */}
      {/* <User /> */}
      <Content />
    </>
  )
}
