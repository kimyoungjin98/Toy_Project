import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import LazyImg from "../LazyImg";

const ProImage = ({ image }) => {
  return (
    <div className="pro_img">
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <LazyImg src={image} />
      </Suspense>
    </div>
  );
};

export default ProImage;
