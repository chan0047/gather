import { timeSlots } from "../lib/availability";

type AvailabilityPollProps = {
  planName: string;
};

export default function AvailabilityPoll({ planName }: AvailabilityPollProps) {
  return (
    <section>
      <h2>{planName}</h2>
      <fieldset>
        <legend>Which times work for you?</legend>
        {timeSlots.map((slot) => (
          <div key={slot.id}>
            <input
              type="checkbox"
              id={`slot-${slot.id}`}
              name="timeslot"
              value={slot.id}
            />
            <label htmlFor={`slot-${slot.id}`}>{slot.label}</label>
          </div>
        ))}
      </fieldset>
    </section>
  );
}
