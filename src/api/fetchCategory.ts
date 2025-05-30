// Для генерации страниц

interface ICategory {
  id: number;
  name: string;
  h1: string;
  title: string;
  description: string;
  url: string;
}

export const fetchCategory = async (item: string): Promise<ICategory> => {
  const response = await fetch(`http://localhost:4000/api/v1/${item}`);
  const data = await response.json();

  return data;
};
