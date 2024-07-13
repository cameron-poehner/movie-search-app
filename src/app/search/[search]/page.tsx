import { GET_SEARCH_RESULTS } from './data';

export default async function Page({ params }: { params: { search: string } }) {
  const { results } = await GET_SEARCH_RESULTS(params.search);
  return <div>My Search: {params.search}</div>;
}
