export const getJSONFromResponse = <T = unknown>(
	response: Response
): Promise<T> => response.json()
