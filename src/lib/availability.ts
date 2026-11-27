export type TimeSlot = {
  id: string;
  label: string;
};

export const timeSlots: TimeSlot[] = [
  { id: "fri-evening", label: "Friday evening" },
  { id: "sat-morning", label: "Saturday morning" },
  { id: "sun-afternoon", label: "Sunday afternoon" },
];
