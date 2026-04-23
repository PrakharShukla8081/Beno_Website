import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 page not found | Beno Support",
  description: "Beno Support...",
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-bwhite flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold mb-4 text-borange">404</div>

        <h1 className="text-2xl font-semibold mb-4 text-bblack">
          Page Not Found
        </h1>

        <p className="text-lg mb-8 text-bblack leading-relaxed opacity-80">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href={"/"}
          className="px-8 py-3 bg-bblue text-swhite rounded-md font-medium hover:bg-borange transition-colors duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
