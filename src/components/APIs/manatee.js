import axios from "axios"

const manatee = {
    getAllJokes: async () => {
      try {
        const response = await axios.get("https://manateejokesapi.herokuapp.com/manatees");
        return response.data;
      } catch (error) {
        return error;
      }
    },
    getRandomJoke: async () => {
      try {
        const response = await axios.get("https://manateejokesapi.herokuapp.com/manatees/random");
        return response.data;
      } catch (error) {
        return error;
      }
    },
  };
  
  export default manatee;