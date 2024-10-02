import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { NewsArticle } from "@/constants/NewsArticle";

export function useNewsApi(
  url: string,
  params: any,
  refreshOn: any[] = []
) {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url, { params });
      setNews(response.data.articles);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, params]);

  useEffect(() => {
    fetchNews();
  }, refreshOn);

  return { news, loading, error };
}
