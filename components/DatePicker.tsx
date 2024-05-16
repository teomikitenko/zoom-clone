"use client";

import DatePicker from "react-datepicker";
import { Input } from "./ui/input";
export function MyDatePicker({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <DatePicker
      showTimeSelect
      customInput={<Input className="mt-2" value={date?.toString()} />}
      dateFormat="MMM dd yyyy h:mm aa"
      selected={date}
      onChange={(date) => setDate(date as Date)}
    />
  );
}
