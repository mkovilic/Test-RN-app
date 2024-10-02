import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { NewsArticle } from "../constants/NewsArticle";
import Moment from "moment";
import { Link } from "expo-router";

export function NewsItem({ item }: { item: NewsArticle }) {
    Moment.locale("en");
    const date = Moment(item.publishedAt);
    const formattedDate = Moment(date).format("D MMM YYYY");
  
    return (
        <Link
        href={{
          pathname: "/detail",
          params: {
            title: item.title,
            imageUrl: item.urlToImage,
            description: item.description,
          },
        }}
        asChild
      >
        <TouchableOpacity style={styles.newsItem}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsDate}>{formattedDate}</Text>
        </TouchableOpacity>
      </Link>
    );
  };

  const styles = StyleSheet.create({
    newsItem: {
      backgroundColor: "white",
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    newsTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    newsDate: {
      fontSize: 12,
      alignContent: "flex-end",
    },
  });