export default function formatImagestoString(images: Array<string>) {
  const arrayString = JSON.stringify(images).replace(/'/g, '"');
  return arrayString;
}
