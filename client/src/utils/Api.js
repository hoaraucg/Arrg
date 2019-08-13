import axios from "axios";

export default {
  // Gets all arguments
  getArguments: function() {
    // console.log('yes')
    return axios.get("/api/arguments");
  },
  // Gets the argument with the given id
  getArgument: function(id) {
    return axios.get("/api/arguments/" + id);
  },
  // Deletes the book with the given id
  deleteArgument: function(id) {
    return axios.delete("/api/arguments/" + id);
  },
  // Saves a book to the database
  saveArgument: function(argumentData) {
    return axios.post("/api/arguments", argumentData);
  },
  updateVotes: function(id, dataComing) {
    // console.log("API Yes" +JSON.stringify(dataComing))
    return axios({
      url: "/api/arguments/" + id,
      method: "put",
      data: dataComing
    })
  }
};