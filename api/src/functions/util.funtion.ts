export function successResponse(message: string) {
  return { success: true, message };
}

export function errorResponse(message: string) {
  return { success: true, message };
}

export function createSuccessResponse(id: number, message: string) {
  return { success: true, message, id };
}
