import { useParams, useLocation } from "react-router";

export const filePathLabel = (desc?: any) => {
  const params = useParams();
  const location = useLocation();

  const prefix = "routes/$session.tsx - ";

  const paramsString = params && Object.keys(params).length > 0
    ? JSON.stringify(params)
    : "no params";

  console.log(desc, { params: params, location: location});

  // return {
  //   filePath: `${prefix}${paramsString}`,
  //   location: `${location}`,
  // };
};
