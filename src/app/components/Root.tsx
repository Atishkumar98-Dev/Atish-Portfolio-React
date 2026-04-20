import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}