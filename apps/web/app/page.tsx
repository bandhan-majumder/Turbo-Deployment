import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      Welcome to the app!
      First name: 
      {user?.username || "No user found"}
    </div>
  );
}