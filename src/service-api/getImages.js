import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "24374201-4895b5a995aed977e23a40374";

const getImages = (search, page) => {
  return axios
    .get(
      `${BASE_URL}/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export default getImages;
