import { Loader2 } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <Loader2 className="w-12 h-12 animate-spin text-gray-500" />
      <h1 className="text-2xl font-semibold mt-4">Contact Page Under Construction</h1>
      <p className="text-gray-600 mt-2">
        We&apos;re working hard to bring you something amazing. Stay tuned!
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Return to Homepage
      </Link>
    </div>
  );
};
export default Contact;
