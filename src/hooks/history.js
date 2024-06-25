/* eslint-disable no-unused-vars */
import { usePatient } from "../features/usePatient";

export function useHistory(text) {
  const { isLoading, patient, error } = usePatient();

  //   if (isLoading && !patient) return null;

  if (!isLoading && text === "chart") {
    const data = patient[3]?.diagnosis_history
      ?.filter((_, idx) => idx < 6)
      ?.reverse()
      ?.map(({ month, year, blood_pressure }) => ({
        date: `${month.slice(0, 3)}. ${year}`,
        systolic: blood_pressure.systolic.value,
        diastolic: blood_pressure.diastolic.value,
      }));

    return { data, error, isLoading } || [];
  }

  if (!isLoading && text === "middle") {
    const dataOne = patient[3]?.diagnosis_history?.map(
      ({ heart_rate, respiratory_rate, temperature }) => ({
        heart: heart_rate,
        res: respiratory_rate,
        temp: temperature,
      })
    );

    return dataOne || [];
  }
}
