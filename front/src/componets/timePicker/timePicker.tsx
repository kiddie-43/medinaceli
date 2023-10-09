import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

interface ITimerPickerComponent {
  label: string;
  onChange: (value: any, name: string) => void;
  name: string;
  value: any;
  disabled?: boolean;
  minTime?: any;
}

export const TimerPicker: React.FC<ITimerPickerComponent> = ({
  label,
  name,
  onChange,
  value,
  disabled,
  minTime,
}) => {
  return (
    <LocalizationProvider adapterLocale="es" dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "TimePicker",
          "MobileTimePicker",
          "DesktopTimePicker",
          "StaticTimePicker",
        ]}
      >
        <DemoItem>
          <MobileTimePicker
            onChange={(value) => {
              onChange(dayjs(value).format("hh:mm"), name);
            }}
            disabled={disabled}
            defaultValue={dayjs(value)}
            label={label}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};
