type AvailabilityPollProps = {
  planName: string;
};

export default function AvailabilityPoll({ planName }: AvailabilityPollProps) {
  return (
    <section>
      <h2>{planName}</h2>
    </section>
  );
}
