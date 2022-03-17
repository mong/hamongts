import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import { PopUp } from "../popup";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

export const SearchBar = () => {
  return (
    <PopUp btnComponent={() => <button>SØK</button>}>
      <InstantSearch indexName="bestbuy" searchClient={searchClient}>
        <SearchBox
          autoFocus
          translations={{ placeholder: "Søk i alt innhold/innhald" }}
        />
        <Hits />{" "}
      </InstantSearch>
    </PopUp>
  );
};
