interface ICategory {
  id: number;
  name: string;
  h1: string;
  title: string;
  description: string;
  url: string;
}

export const fetchCategory = async (item: string): Promise<ICategory | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${item}`, {
      next: { revalidate: 10800 },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
