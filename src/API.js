import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 'Put Your API key'",
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);
  return response;
};

export default SearchImages;
