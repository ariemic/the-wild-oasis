import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    //deleteCabin is an mutation func
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin sucessfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    //takes error from a mutation func
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
