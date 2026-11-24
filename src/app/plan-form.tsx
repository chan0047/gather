"use client";
import { useState, type SubmitEvent } from "react";

export default function PlanForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const plan = fields.get("planName");
    const trimmedPlanName = typeof plan === "string" ? plan.trim() : "";
    if (trimmedPlanName) {
      setMessage(`Great! Let's start planning ${trimmedPlanName}.`);
    } else {
      setMessage("Enter a plan name.");
    }
  }

  return (
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
  );
}
