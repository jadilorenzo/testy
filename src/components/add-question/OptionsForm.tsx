import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  Switch,
  FormGroup,
  FormHelperText
} from "@material-ui/core";
import { OptionsContext } from "../../context/OptionsContext";

const OptionsForm = () => {
  const [options, setOptions] = React.useContext(OptionsContext);

  const handleChange = (e: any) => {
    setOptions({
      ...options,
      type: e.target.value.length !== 0 ? e.target.value : ""
    });
  };

  return (
    <div className="FormGroups">
      <FormGroup>
        <InputLabel>Question Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={options.type}
          onChange={handleChange}
        >
          <MenuItem value={"multiple-choice"}>Multiple Options</MenuItem>
          <MenuItem value={"multi-answer"}>Multiple Select</MenuItem>
          <MenuItem value={"essay"}>Free Answer</MenuItem>
        </Select>
      </FormGroup>
      <FormGroup>
        <InputLabel>Auto check</InputLabel>
        <Switch
          color="secondary"
          checked={options.autocheck}
          onClick={() => {
            setOptions({ ...options, autocheck: !options.autocheck });
          }}
        />
        {options.autocheck && (
          <FormHelperText>Does not apply to essay questions.</FormHelperText>
        )}
      </FormGroup>
    </div>
  );
};

export default OptionsForm;
