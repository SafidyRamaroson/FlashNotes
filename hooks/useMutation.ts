import { ApiResponse, ApiSuccessResponse, ApiFailureResponse } from "@/types/apiResponse";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type HttpMethod = "POST" | "PUT" | "DELETE";

type MutationOptions<TData, TVariables = unknown> = {
  endpoint: string;
  method: HttpMethod;
  queryKeyToInvalidate?: string;
  where?: Record<string, string | number>;
  onSuccess?: (data: ApiSuccessResponse<TData>) => void;
  onError?: (error: ApiFailureResponse) => void;
};

export const fetchMutation = async <TData, TVariables = unknown>(
  endpoint: string,
  method: HttpMethod,
  body?: TVariables,
  where?: Record<string, string | number>
): Promise<ApiSuccessResponse<TData>> => {
  console.log("1")
  let url = endpoint
  if (where) {
    const query = new URLSearchParams(where as Record<string, string>).toString();
    url = `${endpoint}?${query}`;
  }

  if(method === "DELETE"){
    body = undefined
  }

  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return response.json();
};

export const useMutationApi = <TData, TVariables = unknown>({
  endpoint,
  method,
  where,
  queryKeyToInvalidate,
  onSuccess,
  onError,
}: MutationOptions<TData, TVariables>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body?: TVariables) => fetchMutation<TData, TVariables>(endpoint, method, body, where),
    onSuccess: (data) => {
      if (queryKeyToInvalidate) {
        queryClient.invalidateQueries({ queryKey: [queryKeyToInvalidate] });
      }
      if (onSuccess) onSuccess(data);
    },
    onError,
  });
};
