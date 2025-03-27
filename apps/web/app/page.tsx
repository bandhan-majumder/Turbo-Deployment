import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      Welcome to the app!
      <br />
      First name: 
      {user?.username || "No user found"}
    </div>
  );
}