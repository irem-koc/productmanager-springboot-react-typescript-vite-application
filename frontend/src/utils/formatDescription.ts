export default function formatDescription(description: string) {
  if (description.length > 30) {
    return description.substring(0, 30) + "...";
  } else {
    return description;
  }
}
