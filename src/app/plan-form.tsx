"use client";
import { useState, type SubmitEvent } from "react";
import AvailabilityPoll from "./availability-poll";

export default function PlanForm() {
  const [message, setMessage] = useState("");
  const [acceptedPlanName, setAcceptedPlanName] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const plan = fields.get("planName");
    const trimmedPlanName = typeof plan === "string" ? plan.trim() : "";
    if (trimmedPlanName) {
      setMessage(`Great! Let's start planning ${trimmedPlanName}.`);
      setAcceptedPlanName(trimmedPlanName);
    } else {
      setMessage("Enter a plan name.");
      setAcceptedPlanName("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="plan-name">Plan name</label>
        <input
          className="border border-zinc-500 rounded px-3 py-2"
          id="plan-name"
          name="planName"
          type="text"
        />
        <button type="submit">Create plan</button>
        {message && <p>{message}</p>}
      </form>
      {acceptedPlanName && <AvailabilityPoll planName={acceptedPlanName} />}
    </>
  );
}
