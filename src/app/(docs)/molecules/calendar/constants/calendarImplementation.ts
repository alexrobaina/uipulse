export const calendarImplementation = `import Calendar from "@/app/ui/molecules/Calendar";
import { useState } from "react";

export default function CalendarExample() {
  const [singleDate, setSingleDate] = useState<Date | null>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);
  const [dateRange, setDateRange] = useState<{start: Date; end: Date} | null>(null);

  return (
    <div className="space-y-8">
      {/* Single Date Selection */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Single Date Selection</h3>
        <Calendar
          value={singleDate}
          onValueChange={(date) => setSingleDate(date as Date)}
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Selected: {singleDate?.toDateString() || "None"}
        </p>
      </div>

      {/* Multiple Date Selection */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Multiple Date Selection</h3>
        <Calendar
          mode="multiple"
          value={multipleDates}
          onValueChange={(dates) => setMultipleDates(dates as Date[])}
          variant="modern"
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Selected: {multipleDates.length} dates
        </p>
      </div>

      {/* Range Selection */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Range Selection</h3>
        <Calendar
          mode="range"
          value={dateRange}
          onValueChange={(range) => setDateRange(range as {start: Date; end: Date})}
          variant="modern"
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Range: {dateRange ? 
            \`\${dateRange.start.toDateString()} - \${dateRange.end?.toDateString() || 'Open'}\` : 
            "None"
          }
        </p>
      </div>

      {/* Multiple Months */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Multiple Months</h3>
        <Calendar
          numberOfMonths={2}
          mode="range"
          variant="elevated"
        />
      </div>

      {/* Disabled Dates */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Disabled Dates</h3>
        <Calendar
          disabled={[
            new Date(2024, 11, 25), // Christmas
            new Date(2024, 0, 1),   // New Year
          ]}
          variant="modern"
        />
      </div>

      {/* Date Range Restrictions */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Date Range Restrictions</h3>
        <Calendar
          minDate={new Date()} // Today
          maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days
          variant="modern"
        />
      </div>

      {/* Week Numbers */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">With Week Numbers</h3>
        <Calendar
          showWeekNumbers
          weekStartsOn={1} // Monday
          variant="modern"
        />
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Calendar size="sm" variant="modern" />
          <Calendar size="md" variant="modern" />
          <Calendar size="lg" variant="modern" />
        </div>
      </div>

      {/* Custom Disabled Function */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Custom Disabled Function</h3>
        <Calendar
          disabled={(date) => {
            // Disable weekends
            const day = date.getDay();
            return day === 0 || day === 6;
          }}
          variant="modern"
        />
      </div>
    </div>
  );
}`;
