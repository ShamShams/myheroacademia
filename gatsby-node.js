const fetch = require("node-fetch");

const NODE_TYPE = "Character";

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  const apiUrl = `https://myheroacademiaapi.com/api/character`;

  const response = await fetch(apiUrl);
  const json = await response.json();
  const { pages } = json.info;

  const characters = [];
  for (let i = 1; i <= pages; i++) {
    const resp = await fetch(`${apiUrl}?page=${i}`);
    const data = await resp.json();
    characters.push(...data.result);
  }

  characters.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE} ${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });
};
