export default function PlanForm() {
  return (
    <form>
      <label htmlFor ="plan-name">Plan name</label>
      <input className = "border border-zinc-500 rounded px-3 py-2"id = "plan-name" name = "planName" type = "text"/>
      <button type = "submit">Create plan</button>
    </form>
  );
}