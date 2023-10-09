import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { IOption } from "../../../modelos/catalog/utils/IOption";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];



interface IMultiSelectChipProps {
  options: IOption[];
  selectedOptions: string[];
  label: string;
  name: string;
  onChange: (value: string[], name: string) => void;
  disabled?: boolean;
}

export const MultipleSelectChip: React.FC<IMultiSelectChipProps> = ({
  label,
  options,
  selectedOptions,
  disabled,
  name,
  onChange,
}) => {
  const theme = useTheme();
  const BoxInputChip = {
    display: "flex",
    flexWrap: "wrap",
    gap: 0.5,
  };
  const onHandleChange = (ev: any) => {
    
    let value = ev.target.value[0];
    let isValueSelected = selectedOptions.includes(value);
    
    if (isValueSelected) {
      onChange([...selectedOptions.filter((item) => item !== value)], name);
    } else {
      onChange([...selectedOptions, value], name);
    }
  };
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={selectedOptions}
        onChange={onHandleChange}
        input={<OutlinedInput id="select-multiple-chip" label={label} />}
        disabled={disabled}
        renderValue={(value) => (
          <Box sx={BoxInputChip}>
            {value.map((id) => {
              
              return (
                <Chip
                  key={id}
                  label={
                    options.find((item) => String(item.id) === String(id))
                      ?.text
                  }
                />
              );
            })}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {options.map((option) => {
          //
          return (
            <MenuItem
              key={option.id}
              value={option.id}
            >
              {option.text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
