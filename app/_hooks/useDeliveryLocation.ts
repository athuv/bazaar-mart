import { useEffect, useState } from "react";
import { DeliveryLocation } from "@/lib/types/deliveryLocationTypes";
import { Country } from "country-list";

function useDeliveryLocation(): DeliveryLocation {
  const [country, setCountry] = useState<Country>({ name: "", code: "" });
  const [showCountries, setShowCountries] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    async function getLocationByIp() {
      const response = await fetch("api/v1/deliveryLocation", {
        cache: "force-cache",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setCountry({
        name: data.data.country,
        code: data.data.countryCode.toLowerCase(),
      });
    }

    getLocationByIp();
  }, []);

  return {
    setShowCountries,
    showCountries,
    country,
    setCountry,
    filter,
    setFilter,
  };
}

export default useDeliveryLocation;
