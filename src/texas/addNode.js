/**
 * Axios request to add a node to the graph
 * hit url /api/texas/addNode
 */

const axios = require("axios");

const addNode = (node) => {
  return axios.post("/api/texas/addNode", node);
};

export default addNode;
