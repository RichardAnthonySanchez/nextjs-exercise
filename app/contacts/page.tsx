import Link from "next/link"
import type { Metadata } from 'next'
import getUsers from "@/lib/getUsers"

export const metadata: Metadata = {
  title: 'My Contacts',
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

 
export default async function Page() {
  const data = await getData()
 
  return <main>
    <div>
      <h1>My Contacts</h1>
      <ul>
      {data.map((contact) => (
        <li>
            <Link href={`/contacts/` + contact.id} key={contact.id}>{contact.name}</Link>
        </li>
          ))}
      </ul>
    </div>
  </main>
}


