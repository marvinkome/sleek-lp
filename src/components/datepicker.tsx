import React from "react";
import { chakra } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
  value: Date | null;
  children: any;
  onChange: (date: Date | null) => void;
};
const DatePicker = (props: DatePickerProps) => {
  const Input = ({ value, onClick }: any) => {
    return <>{props.children && React.cloneElement(props.children, { value, onClick })}</>;
  };

  return (
    <chakra.div
      sx={{
        "& .react-datepicker": {
          fontFamily: "inherit",
          border: "none",
          shadow: "lg",
        },
        "& .react-datepicker__navigation": {
          top: 2,
          color: "rgb(0 0 0 / 80%)",
        },
        "& .react-datepicker-popper": {
          zIndex: 1000,

          "& .react-datepicker__triangle::after": {
            borderBottomColor: "gray.200",
          },
          "& .react-datepicker__triangle::before": {
            borderBottomColor: "gray.200",
          },
          "& .react-datepicker__navigation-icon::before": {
            borderColor: "rgb(0 0 0 / 60%)",
            borderWidth: "2px 2px 0 0",
          },
        },
        "& .react-datepicker__header": {
          py: 2,
          bgColor: "gray.200",

          "& .react-datepicker__current-month": {
            fontSize: "md",
            fontWeight: "500",
            color: "rgb(0 0 0 / 80%)",
          },
          "& .react-datepicker__day-name": {
            fontSize: "sm",
            fontWeight: "500",
            color: "rgb(0 0 0 / 80%)",
          },
        },

        "& .react-datepicker__day--selected, & .react-datepicker__day--keyboard-selected": {
          bgColor: "blackAlpha.900",
          color: "#fff",
        },
      }}
    >
      <ReactDatePicker selected={props.value} onChange={(date) => props.onChange(date)} customInput={<Input />} />
    </chakra.div>
  );
};

export default DatePicker;
