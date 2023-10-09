import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { IOption } from "../../../modelos/catalog/utils/IOption";
import { useEffect, useState } from "react";
import { Chip } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

interface IMultiSelectChipProps {
  options: IOption[];
  selectedKeys: string[];
  label: string;
  name: string;
  onChange: (value: string[], name: string) => void;
  disabled?: boolean;
}
export const MultipleSelectCheckmarks: React.FC<IMultiSelectChipProps> = ({
  label,
  name,
  onChange,
  options,
  disabled,
  selectedKeys,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(selectedKeys);

  const handleSelectChange = (event: any) => {
    const selected = event.target.value as string[];
    setSelectedValues(selected);
    onChange(selected, name);
  };
useEffect(()=>{
  setSelectedValues(selectedKeys);
},[selectedKeys])
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel id="multiple-select-label">{label}</InputLabel>
      <Select
        labelId="multiple-select-label"
        id="multiple-select"
        multiple
        label={label}
        value={selectedValues}
        onChange={handleSelectChange}
        renderValue={(selected) => (
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            {(selected as string[]).map((value) => (
              <Chip key={value} label={options.find(item => String(item.id) === value)?.text} />
            ))}
          </div>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={String(option.id)}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
