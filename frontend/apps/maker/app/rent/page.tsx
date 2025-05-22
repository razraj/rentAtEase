"use client";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { VehicleDropdown } from "@/components/VehicleDropdown";
import { VehicleTypeDropdown } from "@/components/VehicleTypeDropdown";
import { Button, Card, Label } from "@repo/ui/tailus-ui";
import {
  getVehicles,
  getVehicleTypes,
  selectVehicles,
  VehiclesRecord,
  VehiclesTypeRecord,
} from "app/lib/features/vehicles/vehiclesSlice";
import { useAppDispatch, useAppSelector } from "app/lib/hooks";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";

export default function Page() {
  const dispatch = useAppDispatch();
  const vehicleData = useAppSelector(selectVehicles);

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [validDate, setValidDate] = useState(false);

  const [selectVehicle, setSelectVehicle] = useState<string | undefined>();
  const [bookingVehicle, setBookingVehicle] = useState<VehiclesRecord>();
  const [selectVehicleType, setSelectVehicleType] = useState<
    VehiclesTypeRecord | undefined
  >();

  useEffect(() => {
    if (startDate && endDate) {
      setValidDate(true);
    } else {
      setValidDate(false);
    }
  }, [startDate, endDate, validDate]);

  useEffect(() => {
    dispatch(getVehicleTypes());
  }, [dispatch]);

  useEffect(() => {
    if (validDate) dispatch(getVehicles());
  }, [dispatch, validDate]);

  return (
    <>
      <Header></Header>
      <section className="">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="mx-auto space-y-6 rounded-[--btn-radius] shadow-gray-500/5">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                <div className="space-y-2.5">
                  <Label size="lg">Select Vehicle</Label>
                  <VehicleDropdown
                    // selectVehicle={[
                    //   ...new Set(
                    //     vehicleData.vehicleType?.flatMap((data) => data.type)
                    //   ),
                    // ]}
                    selectVehicle={["Car", "Bike"]}
                    onSelectVehicle={setSelectVehicle}
                  />
                </div>
                <div className="space-y-2.5 z-50">
                  <Label size="lg">Select Vehicle Type</Label>
                  <VehicleTypeDropdown
                    selectVehicle={vehicleData?.vehicleType?.filter(
                      (vehicle) => vehicle.type === selectVehicle
                    )}
                    onSelectVehicle={setSelectVehicleType}
                  />
                </div>
              </div>
            </div>
          </div>

          {selectVehicle && selectVehicleType && (
            <>
              <div className="grid gap-4 mb-12 sm:grid-cols-2 sm:gap-3 mt-12">
                <div className="space-y-2.5">
                  <div className="space-y-2.5 mx-auto">
                    <Label size="lg" htmlFor="firstname">
                      Select Start Date
                    </Label>
                    <DayPicker
                      required
                      animate
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      footer={
                        startDate
                          ? `Selected: ${startDate.toLocaleDateString()}`
                          : "Pick a day."
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2.5 z-1">
                  <div className="space-y-2.5 mx-auto z-1">
                    <Label size="lg">Select End Date</Label>
                    <DayPicker
                      className="z-1"
                      required
                      animate
                      mode="single"
                      selected={endDate}
                      onSelect={(date) => {
                        if (startDate && date >= startDate) {
                          setEndDate(date);
                        } else {
                          setEndDate(undefined);
                        }
                      }}
                      footer={
                        endDate
                          ? `Selected: ${endDate.toLocaleDateString()}`
                          : "Pick a day."
                      }
                    />
                  </div>
                </div>
              </div>
              {/* <Button.Root
                disabled={!validDate}
                onClick={() => {
                  console.log(
                    "🚀 ~ Page ~ selectVehicle:",
                    selectVehicle,
                    selectVehicleType
                  );
                }}
                className="w-full mb-8 space-y-12"
              >
                <Button.Label>Search Vehicle</Button.Label>
              </Button.Root> */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                {vehicleData?.vehicles
                  ?.filter((data) => data.vehicleType === selectVehicleType.id)
                  .map((product) => (
                    <ProductCard
                      onSelect={setBookingVehicle}
                      vehiclesRecord={product}
                      key={product.name + product.image}
                      {...product}
                    />
                  ))}
              </div>
            </>
          )}
        </div>
        <Button.Root
          size="xl"
          title="Contact Sale"
          className="fixed z-90 bottom-10 right-8 bg-blue-600  drop-shadow-lg flex justify-center items-center text-white hover:bg-blue-700 hover:drop-shadow-2xl "
          onClick={() => {
            console.log(
              "🚀 ~ Page ~ selectVehicle:",
              selectVehicle,
              selectVehicleType
            );
            // call booking api
          }}
        >
          <Button.Label>Book Now</Button.Label>
        </Button.Root>
      </section>
    </>
  );
}
