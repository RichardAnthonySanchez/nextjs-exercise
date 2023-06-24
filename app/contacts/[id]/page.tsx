import getUser from "@/lib/getUser"

type Params = {
  params: {
    userId: string
  }
}

 export default async function post( {params: { id }}: Params ) {
  const userData: Promise<User> = getUser(id)

  const [ user ] = await Promise.all([ userData ])

  return ( 
  <>
    <h2>{user.name}</h2>
    <br />
    <ul>
      <li>{user.email}</li>
      <li>{user.address.city}</li>
      <li>{user.phone}</li>
    </ul>
  </>
  )
}


