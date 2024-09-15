import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    //* Every query needs to be uniqly identified withe a proper queryKey
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isPending, cabins };
}
