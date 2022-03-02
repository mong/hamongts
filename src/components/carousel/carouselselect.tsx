import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";

type CarouselSelectProprs = {
  options: { value: number; label: string }[];
  id: string;
  label?: React.ReactNode;
  value: number;
  onChange?: (e: SelectChangeEvent<number>) => any;
};

export const CarouselSelect = ({
  options,
  id,
  label,
  value,
  onChange,
}: CarouselSelectProprs) => {
  const handleChange = (e: SelectChangeEvent<number>) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div style={{ width: "150px", alignSelf: "flex-end" }}>
      <FormControl fullWidth variant="standard">
        <InputLabel id={`${id}-select-label`}>{label}</InputLabel>
        <MuiSelect
          labelId={`${id}-select-label`}
          id={`${id}-select`}
          label={label}
          value={value}
          onChange={(e) => handleChange(e)}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </div>
  );
};
