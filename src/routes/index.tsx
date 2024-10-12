import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

// Example route
function Index() {
  const query = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  if (query.isLoading) {
    return <h1 className="text-lg text-red-400">Loading</h1>;
  }

  return (
    <h1 className="text-lg text-lime-400">
      {JSON.stringify(query.data, null, 4)}
    </h1>
  );
}
