import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../services/apiPatients";

export function usePatient() {
  const {
    isLoading,
    data: patient,
    error,
  } = useQuery({
    queryKey: [`patient`],
    queryFn: getPatients,
  });

  return { isLoading, patient, error };
}
