import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

interface ArticleResponse {
  results: any[];
  total: number;
  total_pages: number;
}

const fetchArticles = async (
  query: string,
  page: number
): Promise<ArticleResponse> => {
  const params = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: "12",
    client_id: "2xjo4dpW9gmhbpr2DYZLs9dosiYN5QdOWUU2CQ9-f-E",
  });

  const { data } = await axios.get<ArticleResponse>(`/search/photos?${params}`);
  return data;
};

export { fetchArticles };
