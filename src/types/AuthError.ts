// TODO: Define the types
export interface AuthError {
  data: any;
  response?: Record<string, any>;
  error_message(error_message: any): unknown;
  message?: string;
}
