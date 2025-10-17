import { cn } from "./utils";

export function Calendar({ className }: { className?: string }) {
  return (
    <div className={cn("p-3 rounded-md border bg-gray-50 text-gray-400", className)}>
      <p>Calendário desativado.</p>
    </div>
  );
}