import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useMovie(id?: string) {
  const { data, isLoading, error } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isLoading,
    error,
  };
}
