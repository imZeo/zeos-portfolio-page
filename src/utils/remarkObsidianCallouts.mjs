const calloutPattern = /^\[!([^\]]+)\][+-]?\s*(.*)$/;

function getCallout(node) {
  if (node.type !== "blockquote") {
    return null;
  }

  const firstChild = node.children?.[0];
  const firstText = firstChild?.children?.[0];

  if (firstChild?.type !== "paragraph" || firstText?.type !== "text") {
    return null;
  }

  const match = firstText.value.match(calloutPattern);

  if (!match) {
    return null;
  }

  return {
    firstChild,
    node,
    title: match[2],
    type: match[1].trim().toLowerCase(),
  };
}

function normalizeCalloutTitle(type, title) {
  const normalizedTitle = title.replace(/^#{1,6}\s+/, "").trim();

  if (normalizedTitle) {
    return normalizedTitle;
  }

  return type
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function isRecipeYieldCallout(callout) {
  const title = normalizeCalloutTitle(callout.type, callout.title);

  return (
    callout.type === "info" &&
    title.length <= 32 &&
    /\d/.test(title) &&
    /\b(pax|servings?)\b/i.test(title)
  );
}

function transformCallout(callout) {
  const { firstChild, node, title, type } = callout;
  const normalizedTitle = normalizeCalloutTitle(type, title);

  node.data = {
    ...node.data,
    hName: "aside",
    hProperties: {
      ...node.data?.hProperties,
      className: ["callout", `callout--${type}`],
      "data-callout": type,
    },
  };

  firstChild.data = {
    ...firstChild.data,
    hProperties: {
      ...firstChild.data?.hProperties,
      className: ["callout__title"],
    },
  };

  firstChild.children = [
    {
      type: "strong",
      children: [{ type: "text", value: normalizedTitle }],
    },
  ];
}

function transformChildren(node) {
  if (!Array.isArray(node.children)) {
    return;
  }

  for (let index = 0; index < node.children.length; index += 1) {
    const child = node.children[index];
    const callout = getCallout(child);

    if (callout && isRecipeYieldCallout(callout)) {
      node.children.splice(index, 1);
      index -= 1;
      continue;
    }

    if (callout) {
      transformCallout(callout);
    }

    transformChildren(child);
  }
}

export default function remarkObsidianCallouts() {
  return (tree) => {
    transformChildren(tree);
  };
}
