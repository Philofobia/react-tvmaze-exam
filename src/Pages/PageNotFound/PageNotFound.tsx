
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="font-title text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="font-body mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            to="/home"
            className="px-8 py-3 font-semibold rounded btn"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
