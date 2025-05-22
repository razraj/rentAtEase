import { Button, DropdownMenu } from "@repo/ui/tailus-ui";
import { VehiclesTypeRecord } from "app/lib/features/vehicles/vehiclesSlice";
import { ChevronDown, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

type VehicleProps = {
  selectVehicle: VehiclesTypeRecord[] | null | undefined;
  onSelectVehicle: (vehicle: VehiclesTypeRecord | undefined) => void;
};

export const VehicleTypeDropdown = ({
  selectVehicle,
  onSelectVehicle,
}: VehicleProps) => {
  console.log("🚀 ~ VehicleDropdown ~ selectVehicle:", selectVehicle);
  const [selected, setSelected] = useState<undefined | VehiclesTypeRecord>(
    undefined
  );

  useEffect(() => {
    onSelectVehicle(selected);
  }, [onSelectVehicle, selected]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root variant="outlined" intent="gray">
          <Button.Label>{selected ? selected.name : "None"}</Button.Label>
          <Button.Icon type="trailing">
            <ChevronDown />
          </Button.Icon>
        </Button.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content mixed sideOffset={5}>
          {selectVehicle?.map((data) => (
            <DropdownMenu.Item
              key={data.id}
              onClick={() => {
                setSelected(data);
              }}
            >
              <DropdownMenu.Icon>
                <Pencil />
              </DropdownMenu.Icon>
              {data.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
