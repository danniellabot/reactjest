const filteredMenuItems = (node) => {
  return menuItems.filter((item) => {
    const isNodeTypeMatch = item.nodeTypes.includes(node.nodeType);
    const isStatusMatch = item.statuses.includes(node.status);
    const isHasChildrenMatch = node.hasChildren
      ? item.hasChildren === true
      : true;
    return isNodeTypeMatch && isStatusMatch && isHasChildrenMatch;
  });
};

const menuItems = [
  {
    key: "restore",
    label: "Restore",
    nodeTypes: [
      "jump",
      "handoff",
      "resolution",
      "branching",
      "question",
      "reply",
      "link",
      "title",
    ],
    statuses: ["deleted"],
    onClick: handleRestoreClick,
  },
  {
    key: "reply",
    label: "Reply",
    nodeTypes: [
      "jump",
      "handoff",
      "resolution",
      "branching",
      "question",
      "reply",
      "link",
      "title",
    ],
    statuses: ["changed", "unchanged"],
    hasChildren: false,
    onClick: handleMenuItem('add', 'reply'),
  },
  {
    key: "delete",
    label: "Delete",
    nodeTypes: [
      "jump",
      "handoff",
      "resolution",
      "branching",
      "question",
      "reply",
      "link",
    ],
    statuses: ["changed"],
    hasChildren: true,
    onClick: handleDeleteClick,
  },
  {
    key: "question",
    label: "Question",
    nodeTypes: ["branching", "question", "reply", "link", "title"],
    statuses: ["changed", "unchanged"],
    hasChildren: false,
    onClick: handleQuestionClick,
  },
  {
    key: "branch",
    label: "Branch",
    nodeTypes: ["branching", "title"],
    statuses: ["changed"],
    hasChildren: false,
    onClick: handleBranchClick,
  },
  {
    key: "fulfilment",
    label: "Fulfilment",
    nodeTypes: ["reply", "title"],
    statuses: ["changed"],
    hasChildren: false,
    onClick: handleFulfilmentClick,
  },
  {
    key: "handoff",
    label: "Handoff",
    nodeTypes: ["jump", "title"],
    statuses: ["changed"],
    hasChildren: false,
    onClick: handleHandoffClick,
  },
  {
    key: "resolution",
    label: "Resolution",
    nodeTypes: ["jump", "title"],
    statuses: ["changed"],
    hasChildren: false,
    onClick: handleResolutionClick,
  },
  {
    key: "replyAbove",
    label: "Reply above",
    nodeTypes: ["reply", "link", "title"],
    statuses: ["changed", "unchanged"],
    hasChildren: false,
    onClick: handleReplyAboveClick,
  },
];


// Define the function to create menu items
function createMenuItem(key, label, nodeTypes, statuses, hasChildren, handler) {
    return {
      key,
      label,
      nodeTypes,
      statuses,
      hasChildren,
      onClick: handler(key),
    };
  }
  
  // Define the click handlers for the menu items
  const handleAddMenuItem = (key) => () => {
    // Handle add menu item click
  };
  
  const handleDeleteMenuItem = (key) => () => {
    // Handle delete menu item click
  };
  
  // Define the menu items
  const menuItems = [
    createMenuItem('reply', 'Reply', ['jump', 'handoff', 'resolution'], ['changed', 'unchanged'], false, handleAddMenuItem),
    createMenuItem('delete', 'Delete', ['jump', 'handoff', 'resolution'], ['changed'], false, handleDeleteMenuItem),
    createMenuItem('question', 'Add question', ['branching', 'question'], ['changed', 'unchanged'], false, handleAddMenuItem),
    createMenuItem('branch', 'Add branch', ['question'], ['changed', 'unchanged'], false, handleAddMenuItem),
    createMenuItem('jump', 'Add jump', ['reply', 'link', 'title'], ['changed', 'unchanged'], false, handleAddMenuItem),
    createMenuItem('handoff', 'Add handoff', ['reply', 'link', 'title'], ['changed', 'unchanged'], false, handleAddMenuItem),
    createMenuItem('fulfilment', 'Add fulfillment', ['title'], ['changed', 'unchanged'], false, handleAddMenuItem),
    createMenuItem('restore', 'Restore', ['jump', 'handoff', 'resolution', 'branching', 'question', 'reply', 'link'], ['changed'], false, handleAddMenuItem),
    createMenuItem('reply above', 'Reply above', ['reply', 'link'], ['changed', 'unchanged'], true, handleAddMenuItem),
    createMenuItem('delete tree', 'Delete tree', ['jump', 'handoff', 'resolution', 'branching', 'question', 'reply', 'link'], ['changed'], true, handleDeleteMenuItem),
    createMenuItem('delete subtree', 'Delete subtree', ['jump', 'handoff', 'resolution', 'branching', 'question', 'reply', 'link'], ['changed'], true, handleDeleteMenuItem),
  ];
  
