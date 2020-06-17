import React, { useContext, useCallback } from "react";
import { TestContext } from "../context/TestContext";
import { FormControl, TextField, Chip, Button } from "@material-ui/core";

export default () => {
  const [test, setTest] = useContext(TestContext);

  const handleTitleChange = useCallback((e: any) => {
    e.persist();
    setTest((prev: any) => ({ ...prev, title: e.target.value }));
  }, []);

  const [tag, setTag] = React.useState("#");

  const handleButtonClick = () => {
    if (tag !== "#") {
      setTest((prev: any) => ({ ...prev, tags: prev.tags.concat([tag]) }));
      setTag("#");
    }
  };

  return (
    <>
      <FormControl variant="outlined" className="FormGroup">
        <TextField
          value={test.title}
          variant="outlined"
          label="Title"
          onChange={(e: any) => handleTitleChange(e)}
        />
      </FormControl>
      <br />
      <br />
      <FormControl variant="standard" className="FormGroup">
        <TextField
          value={tag}
          onChange={e =>
            setTag(
              !e.target.value.includes("#")
                ? "#" + e.target.value.toLocaleLowerCase()
                : e.target.value.toLocaleLowerCase()
            )
          }
          variant="standard"
          label="+ Add tag"
        />
        <br />
        <Button
          onClick={handleButtonClick}
          color="secondary"
          variant="contained"
        >
          Add
        </Button>
      </FormControl>
      {/* // This doesn't actually work...
        test.tags.length > 0 ? (
        test.tags.map((x: string) => (
          <Chip label={x} style={{ marginRight: '0.5em' }} />
        ))
      ) : (
        <em>No tags</em>
      ) */}
    </>
  );
};
