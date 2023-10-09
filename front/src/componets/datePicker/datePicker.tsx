import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import "dayjs/locale/es";

interface IDatePickerSelectorProps {
  value: any;
  label: string;
  onChange: (value: any, name: string) => void;
  name: string;
  defaultValue?: any;
}

export const DatePickerSelector: React.FC<IDatePickerSelectorProps> = ({
  value,
  label,
  name,
  onChange,
  defaultValue,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"es"}>
      <DemoContainer
        sx={{
          width: "100%",
        }}
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
      >
        <DemoItem>
          <MobileDatePicker
            label={label}
            views={["year", "month", "day"]}
            value={dayjs(value)}
            defaultValue={dayjs(defaultValue)}
            onChange={(value) => {
              onChange(dayjs(value).format("DD/MM/YYYY"), name);
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};
