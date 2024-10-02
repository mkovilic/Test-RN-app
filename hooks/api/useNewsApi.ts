import { useEffect, useState } from "react";
import axios from "axios";
import { NewsArticle } from "@/constants/NewsArticle";

export function useNewsApi(
    url: string,
    params: any

) {
    const [news, setNews] = useState<NewsArticle[]>([]);

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          url,
          {
            params: params,
          }
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", (error as Error).message);
      }
    };
  
    useEffect(() => {
      fetchNews();
    }, []);

    return news;
}