import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col row-start-2 items-center">
        <div>
          <div className="flex flex-row text-6xl font-bold mb-20 justify-self-center">
            <Image
              src="/magnet.jpg"
              alt="magnet"
              width={70}
              height={50}
              className="mr-6"
            />
            <h1 className="mr-4">
              Find. 
            </h1>
          </div>
          <div className="text-xl justify-self-center mb-16">
            <p>
              Connecting Clear-Cut Jobs to Candid Workers
            </p>
          </div>
          <div className="flex-row gap-4 justify-self-center m-6">
            <Link
              href="/findjobs"
              className="mx-10 rounded-md p-4 border-solid border-2 border-gray-500 hover:bg-amber-200"
            >
              Find Jobs
            </Link>
            <Link
              href="/findworkers"
              className="mx-10 rounded-md p-4 border-solid border-2 border-gray-500 hover:bg-amber-200"
            >
              Find Workers
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
