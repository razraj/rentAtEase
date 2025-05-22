import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Caption, Text } from "@repo/ui/tailus-ui/typography";
import { VehiclesRecord } from "app/lib/features/vehicles/vehiclesSlice";
import type React from "react";
type Props = {
  vehiclesRecord: VehiclesRecord;
  onSelect: (vehicle: VehiclesRecord | undefined) => void;
};

export const ProductCard = ({ vehiclesRecord, onSelect }: Props) => {
  const priceUnit = "$";
  return (
    <>
      <div
        onClick={() => onSelect(vehiclesRecord)}
        className="group block space-y-3 "
      >
        <AspectRatio
          ratio={9 / 12}
          className="relative overflow-hidden rounded-[--card-radius] before:absolute before:inset-0 before:z-[1] before:bg-gray-100 before:mix-blend-darken"
        >
          <img
            className="size-full object-cover duration-300 group-hover:scale-105"
            // src={image}
            src={
              "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=3080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={vehiclesRecord.name + " " + vehiclesRecord.make}
          />
        </AspectRatio>
        <div className="px-0.5">
          <div className="flex justify-between">
            <Caption as="p" weight="medium" neutral>
              {name + " " + vehiclesRecord.make}
            </Caption>
            <div className="flex gap-2">
              <Text className="my-0" size="sm">
                {priceUnit + vehiclesRecord.dailyRate}
              </Text>
            </div>
          </div>
          <Caption as="p">{status}</Caption>
        </div>
      </div>
    </>
  );
};
