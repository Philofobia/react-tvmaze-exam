import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShowDetails } from "../../services/Api";
import { showDetails } from "../../services/models";

import posterPlacehoder from "../../assets/posterPlaceholder.png";

import HeaderComponent from "../../shared/Header/Header";
import parse from "html-react-parser";

const ShowDetailsPage = () => {
  const [showDetails, setShowDetails] = useState<showDetails>();
  const { idShow } = useParams();
  const navigate = useNavigate();

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
              src={showDetails?.image || posterPlacehoder}
              alt={showDetails.title}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-5 mb-5" style={{ width: 50}}>
              <button className="btn" onClick={() => navigate(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="2 0 24 22"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </div>
            <h1 className="font-title antialiasing text-4xl font-semibold">{showDetails.title}</h1>
            <p className="mt-2 font-body text-lg antialiasing">
              {showDetails.start || "N/A"} / {showDetails.end || "N/A"}
            </p>

            <span className="font-body text-lg antialiasing mt-10 text-justify lg:max-w-[60ch]">
              {showDetails.summary
                ? parse(`${showDetails.summary}`)
                : "NO INFO"}
            </span>

            <div className="font-body text-base antialiasing mt-5 flex gap-3">
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
