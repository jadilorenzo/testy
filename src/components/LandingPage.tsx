import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import Paper from "./Paper";
import TestDisplay from "./add-test/TestDisplay";
import { AirDBContext } from "../context/AirDBContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default (props: any) => {
  const { tests, users, updateAirDB } = React.useContext(AirDBContext);

  const handleLogout = () => {
    const userId = users.filter(
      user => user.fields.username === window.localStorage.getItem("username")
    )[0].id;

    updateAirDB("Testy - Users", userId, {
      active: "false"
    }).then(() => {
      props.setRedirect("/");
      window.localStorage.removeItem("username");
    });
  };

  return (
    <>
      <br />
      <Paper>
        <Typography variant="h4">Recent Tests</Typography>
        <IconButton
          onClick={handleLogout}
          color="primary"
          style={{
            float: "right",
            position: "absolute",
            top: 35,
            right: "1rem"
          }}
        >
          <ExitToAppIcon />
        </IconButton>
        {tests.map((row: any) => (
          <div
            key={row.fields.ID}
            style={{ width: "100%" }}
            onClick={() => props.setRedirect(`/test/${row.id}`)}
          >
            <TestDisplay
              test={{
                ...row.fields,
                tags: row.fields.tags ? row.fields.tags.split(", ") : [],
                questions: row.fields.questions
                  ? row.fields.questions.split(", ")
                  : []
              }}
            />
          </div>
        ))}
      </Paper>
    </>
  );
};
