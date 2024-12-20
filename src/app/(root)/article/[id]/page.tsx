export default async function ArticlePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  return <div>記事詳細ページ：{id}</div>;
}
