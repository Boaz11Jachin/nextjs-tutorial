import AppHeader from "@/components/app-header";
import { useParams } from "next/navigation";

export default function UserRepositoryPage() {
  const { username, repository } = useParams();

  return (
    <>
      <AppHeader target={username} subTarget={repository} />
      <h1>UserRepositoryPage - {repository}</h1>
    </>
  );
}
