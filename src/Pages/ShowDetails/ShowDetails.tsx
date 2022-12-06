import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowDetails } from "../../services/Api";
import { showDetails } from "../../services/models";
import HeaderComponent from "../../shared/Header/Header";
import parse from "html-react-parser";

const ShowDetailsPage = () => {
  const [showDetails, setShowDetails] = useState<showDetails>();
  const { idShow } = useParams();

  useEffect(() => {
    getShowDetails(idShow!).then((res) => setShowDetails(res));
  }, [idShow]);
  return (
    <>
      <HeaderComponent />
      {showDetails && (
        <main className="max-w-md px-5 pb-10 pt-5 md:pt-20 md:px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0">
          <div className="max-w-md mx-auto">
            <img
              src={showDetails.image || "PLACEHOLDER"}
              alt={showDetails.title}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-5 mb-2"></div>
            <h1 className="text-4xl font-semibold">{showDetails.title}</h1>
            <p className="mt-2 text-sm">
              {showDetails.start || "N/A"} - {showDetails.end || "N/A"}
            </p>

            <p className="mt-10 text-justify lg:max-w-[60ch]">
              {showDetails.summary
                ? parse(`${showDetails.summary}`)
                : "NO INFO"}
            </p>

            <div className="mt-5 flex gap-3">
              {showDetails.genres?.map((genre, i) => (
                <span className="badge badge-outline" key={i}>
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ShowDetailsPage;
