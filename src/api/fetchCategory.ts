interface ICategory {
  id: number;
  name: string;
  h1: string;
  title: string;
  description: string;
  url: string;
}

export const fetchCategory = async (
  item: string
): Promise<ICategory | null> => {
  try {
    const response = await fetch(`https://rvzgroup.ru/api/v1/${item}`, {
      next: { revalidate: 10 },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
