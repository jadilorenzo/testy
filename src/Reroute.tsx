import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { TuiHeader } from "./components";
import { Slide } from "@material-ui/core";

export default ({ render }: { render: any }) => {
  const [redirect, setRedirect] = useState("none");
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (redirect !== "none") {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [redirect]);

  React.useEffect(() => {
    setIsReady(false);
    setRedirect("none");
  }, [location]);

  if (!isReady) {
    return (
      <>
        <TuiHeader setRedirect={setRedirect} />
        <Slide direction="up" in={redirect === "none"} timeout={500}>
          <div>{render(setRedirect)}</div>
        </Slide>
      </>
    );
  } else {
    return <Redirect to={redirect} />;
  }
};
