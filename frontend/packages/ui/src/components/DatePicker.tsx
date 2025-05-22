import { useState, type ReactNode } from "react";
import { format } from "date-fns";
import { type DateRange } from "react-day-picker";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button, Calendar, Popover, Select, Separator } from "./tailus-ui";
import ToggleGroup from "./tailus-ui/ToggleGroup";

export const DatePicker = () => {
  const today = new Date();
  const lastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  );

  const [date, setDate] = useState<DateRange | undefined>({
    from: lastMonth,
    to: today,
  });

  const handleValueChange = (value: string) => {
    const today = new Date();
    let from, to;
    switch (value) {
      case "today":
        from = to = today;
        break;
      case "yesterday":
        from = to = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 1
        );
        break;
      case "last-week":
        from = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - 7
        );
        to = today;
        break;
      case "last-month":
        from = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          today.getDate()
        );
        to = today;
        break;
      case "last-3-months":
        from = new Date(
          today.getFullYear(),
          today.getMonth() - 3,
          today.getDate()
        );
        to = today;
        break;
      case "last-12-months":
        from = new Date(
          today.getFullYear() - 1,
          today.getMonth(),
          today.getDate()
        );
        to = today;
        break;
      case "month-to-date":
        from = new Date(today.getFullYear(), today.getMonth(), 1);
        to = today;
        break;
      case "life-time":
        from = new Date(
          today.getFullYear() - 2,
          today.getMonth(),
          today.getDate()
        );
        to = today;
        break;
      default:
        break;
    }
    setDate({ from, to });
  };
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button.Root variant="outlined" intent="gray">
          <Button.Icon type="leading">
            <CalendarIcon />
          </Button.Icon>
          <Button.Label className="text-sm">
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Select a date</span>
            )}
          </Button.Label>
        </Button.Root>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={6}
          mixed
          className="sm:flex sm:py-0 gap-[--card-padding] max-w-fit"
        >
          <ToggleGroup.Root
            className="hidden sm:grid gap-0 relative pr-4 border-r sm:py-[--card-padding]"
            type="single"
            onValueChange={handleValueChange}
            defaultValue="last-month"
            intent="primary"
            size="sm"
          >
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="today"
            >
              Today
            </ToggleGroup.Item>
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="yesterday"
            >
              Yesterday
            </ToggleGroup.Item>
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="last-week"
            >
              Last Week
            </ToggleGroup.Item>
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="last-month"
            >
              Last Month
            </ToggleGroup.Item>
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="last-3-months"
            >
              Last 3 Months
            </ToggleGroup.Item>
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="last-12-months"
            >
              Last 12 Months
            </ToggleGroup.Item>
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="month-to-date"
            >
              Month to date
            </ToggleGroup.Item>
            <ToggleGroup.Item
              withLabel
              className="w-full justify-start"
              value="life-time"
            >
              Life time
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <div className="sm:hidden">
            <Select.Root
              onValueChange={handleValueChange}
              defaultValue="last-month"
            >
              <Select.Trigger>
                <Select.Value placeholder="Pick a range" />
                <Select.Icon />
              </Select.Trigger>

              <Select.Portal>
                <Select.Content mixed variant="solid">
                  <Select.Viewport>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="last-week">Last Week</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                    <SelectItem value="last-12-months">
                      Last 12 Months
                    </SelectItem>
                    <SelectItem value="month-to-date">Month to date</SelectItem>
                    <SelectItem value="life-time">Life time</SelectItem>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <Separator dashed className="my-4 sm:hidden" />
          <div className="sm:py-[--card-padding]">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
            />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const SelectItem = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  return (
    <Select.Item value={value}>
      <Select.ItemIndicator />
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
};
