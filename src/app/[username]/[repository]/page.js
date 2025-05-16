import AppHeader from "@/components/app-header";

export default async function UserRepositoryPage({ params }) {
  const { username, repository } = await params;

  return (
    <>
      <AppHeader target={username} subTarget={repository} />
      <h1>UserRepositoryPage - {repository}</h1>
    </>
  );
}
