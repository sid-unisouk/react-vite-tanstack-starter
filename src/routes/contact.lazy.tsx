import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

// Example Lazy loaded route
function Contact() {
  return (
    <div className="text-red-600">Hello from Lazy Loaded page /contact!</div>
  );
}
