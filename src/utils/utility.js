export function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

export function convertSpace2NonBreakableSpace(text) {
  return text.replace(/ /g, "\u00a0");
}
