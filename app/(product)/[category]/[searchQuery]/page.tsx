function SearchPage({ params }: { params: { searchQuery: string } }) {
  return <div>{params.searchQuery}</div>;
}
export default SearchPage;
