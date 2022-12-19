import React from "react";
import Switch from "@mui/material/Switch";
import { onOffEstate } from "../../service/estado";
import Swal from "sweetalert2";

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onOffEstate(event.target.checked ? "on" : "off").then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: event.target.checked ? "Abierto" : "Cerrado",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
