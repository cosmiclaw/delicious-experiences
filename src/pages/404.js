import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="max-w-lg w-full mx-auto text-center mt-[50vh] translate-y-[-50%]">
      <h1 className="text-3xl font-bold">404 - Page not found</h1>
      <Link className="inline-block mt-5 text-blue-800 underline" to="/">
        Go to Home
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
