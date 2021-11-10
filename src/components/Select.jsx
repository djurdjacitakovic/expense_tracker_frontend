import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const { options } = props;
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
    props.selected(event.target.value);
  };

  const number = options.length;
  let listOfNames = [];
  for (let i = 0; i < number; i++) {
    listOfNames[i] = options[i]._id;
  }

  return (
    <Box sx={{ width: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Option"
          onChange={handleChange}
        >
          {listOfNames.map((op) => (
            <MenuItem key={op} name={op} value={op}>
              {op}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

/*import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const { options } = props;

  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const number = options.length;
  let listOfNames = [];
  for (let i = 0; i < number; i++) {
    listOfNames[i] = options[i]._id;
  }
  console.log(option);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Groups</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // onChange={(e) => this.setOption(e.target.value)}
          onChange={handleChange}
        >
          {listOfNames.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
*/
