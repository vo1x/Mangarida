import { useQuery, useQueryClient } from '@tanstack/react-query';

function useGetCachedQueryData(key) {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(key);
  return data;
}

export default useGetCachedQueryData;
