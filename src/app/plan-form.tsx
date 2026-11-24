"use client";
import type { SubmitEvent } from "react";

export default function PlanForm() {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor ="plan-name">Plan name</label>
      <input
        className = "border border-zinc-500 rounded px-3 py-2"
        id = "plan-name" 
        name = "planName" 
        type = "text"
      />
      <button type = "submit">Create plan</button>
    </form>
  );
}

function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  console.log(fields.get("planName"));
}