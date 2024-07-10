import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchArticles = async (query, page) => {
  const params = new URLSearchParams({
    query,
    page,
    perPage: 12,
    client_id: "2xjo4dpW9gmhbpr2DYZLs9dosiYN5QdOWUU2CQ9-f-E",
  });

  const { data } = await axios.get(`/search/photos?${params}`);
  return data;
};

export { fetchArticles };
