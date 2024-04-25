import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useCurrentUser() {
  const { data, isLoading, error, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}
