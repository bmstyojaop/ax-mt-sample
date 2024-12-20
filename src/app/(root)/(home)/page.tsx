import { fetchArticles } from "@/lib/data";
import { ArticleCard } from "@/ui/components/card/card";
import { SimpleGrid } from "@mantine/core";

{
}
/**
 * # ホーム画面
 *
 * - 「新着投稿」や「人気の指導方法」を一覧表示。
 * - 学年別（例：1年生～6年生）、教科別（例：国語、算数、理科、社会など）のフィルタリング機能。
 */
export default async function HomePage() {
  const articles = await fetchArticles();
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: "sm", md: "lg" }}>
      {articles.map((item) => (
        <ArticleCard
          key={item.content.id}
          subject={item.content.subject}
          link={item.content.uri}
          title={item.content.title}
          summary={item.content.content}
          author={item.author.username}
          avatar={item.author.avatar}
          image={item.content.image}
        />
      ))}
    </SimpleGrid>
  );
}
