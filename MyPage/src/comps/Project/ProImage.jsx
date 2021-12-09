import React, { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";

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
        <lazy>
          <img src={image}></img>
        </lazy>
      </Suspense>
    </div>
  );
};

export default ProImage;
