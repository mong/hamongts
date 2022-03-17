import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch("apiID...", "apiKey...");

export const SearchBar = () => {
  return (
    <InstantSearch indexName="hamongts" searchClient={searchClient}>
      <SearchBox translations={{ placeholder: "Søk..." }} />
      <Hits />
    </InstantSearch>
  );
};
