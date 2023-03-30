import React, { useState } from "react";
import NodeContextMenu from "./NodeContextMenu";

function Node({ id, nodeType, status }) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setIsContextMenuOpen(true);
  };

  const handleMenuItemClick = (key) => {
    switch (key) {
      case "reattach":
        console.log("Reattach clicked!");
        break;
      case "add":
        console.log("Add clicked!");
        break;
      case "delete":
        console.log("Delete clicked!");
        break;
      case "edit":
        console.log("Edit clicked!");
        break;
      default:
        console.log(`Unknown menu item key: ${key}`);
    }
    setIsContextMenuOpen(false);
  };

  return (
    <div
      className="node"
      onContextMenu={handleContextMenu}
      style={{ backgroundColor: status === "deleted" ? "gray" : "white" }}
    >
      {id}
      {isContextMenuOpen && (
        <NodeContextMenu node={{ nodeType, status }} onMenuItemClick={handleMenuItemClick} />
      )}
    </div>
  );
}

export default Node;


import React from "react";

function NodeContextMenu({ node, onMenuItemClick }) {
  const { nodeType, status } = node;

  // Define the menu items and their respective labels and onClick handlers
  const menuItems = [
    {
      key: "reattach",
      label: "Reattach",
      nodeTypes: ["jump"],
      statuses: ["deleted"],
      onClick: () => onMenuItemClick("reattach"),
    },
    {
      key: "add",
      label: "Add",
      nodeTypes: ["jump", "reply"],
      statuses: ["new", "unchanged"],
      onClick: () => onMenuItemClick("add"),
    },
    {
      key: "delete",
      label: "Delete",
      nodeTypes: ["jump", "reply"],
      statuses: ["new", "unchanged"],
      onClick: () => onMenuItemClick("delete"),
    },
    {
      key: "edit",
      label: "Edit",
      nodeTypes: ["reply"],
      statuses: ["new", "unchanged"],
      onClick: () => onMenuItemClick("edit"),
    },
    // Add more menu items here as needed
  ];

  // Filter the menu items based on the node type and status of the node
  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.nodeTypes.includes(nodeType) && item.statuses.includes(status)
  );

  // Render the filtered menu items
  return (
    <div className="node-context-menu">
      {filteredMenuItems.map((item) => (
        <div
          key={item.key}
          className="menu-item"
          onClick={item.onClick}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default NodeContextMenu;
