import AppHeader from "@/components/app-header";

export default async function UserIndexPage({ params }) {
  const { username } = await params;
  console.log(username);
  return (
    <>
      <AppHeader target={username} />
      <h1>UserIndexPage - {username}</h1>
    </>
  );
}
