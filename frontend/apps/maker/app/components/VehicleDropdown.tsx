import { Button, DropdownMenu } from "@repo/ui/tailus-ui";
import { ChevronDown, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  selectVehicle: Array<string>;
  onSelectVehicle: (vehicle: string | undefined) => void;
};

export const VehicleDropdown = ({ selectVehicle, onSelectVehicle }: Props) => {
  console.log("🚀 ~ VehicleDropdown ~ selectVehicle:", selectVehicle);
  const [selected, setSelected] = useState<undefined | string>(undefined);

  useEffect(() => {
    onSelectVehicle(selected);
  }, [onSelectVehicle, selected]);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root variant="outlined" intent="gray">
          <Button.Label>{selected ? selected : "None"}</Button.Label>
          <Button.Icon type="trailing">
            <ChevronDown />
          </Button.Icon>
        </Button.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content mixed sideOffset={5}>
          {selectVehicle?.map((data) => (
            <DropdownMenu.Item
              key={data}
              onClick={() => {
                setSelected(data);
              }}
            >
              <DropdownMenu.Icon>
                <Pencil />
              </DropdownMenu.Icon>
              {data}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
