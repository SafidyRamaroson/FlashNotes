export interface ApiSuccessResponse<T> {
    success: true;
    data: T;
    message?: string;
}

export interface ApiFailureResponse {
    success: false;
    error: string | string[] | Record<string, unknown>;
    statusCode?: number;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailureResponse;
