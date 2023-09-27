import * as htmlToImage from "html-to-image";

export const downloadImage = async (elem) => {
  const url = await htmlToImage.toPng(elem);
  const link = document.createElement("a");
  link.download = `${new Date().getTime()}.png`;
  link.href = url;
  link.click();
};
