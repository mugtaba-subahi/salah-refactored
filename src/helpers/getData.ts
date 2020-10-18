export default async (url: string): Promise<any> => {
  const response: Response = await fetch(url);
  return response.json();
};
