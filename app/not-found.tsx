import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 ">
        <h1 className="text-8xl">404</h1>
        <h1 className="text-6xl">Page Not Found</h1>
      </div>
      <div className="flex flex-col items-center justify-center my-[4rem] gap-8 ">
        <Link className="text-blue-400 hover:underline text-5xl" href="/">
          Go Back Home...
        </Link>
      </div>
    </>
  );
}
