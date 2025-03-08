import { Link } from "react-router";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-8">
      <div className="w-fit mx-auto">
        <div className="flex flex-col gap-2">
          <Link to="/infinite-horizontal-scroll-animation">
            <p className="text-xl font-semibold p-2 bg-gray-300 rounded">
              Infinite horizontal scroll animation
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
