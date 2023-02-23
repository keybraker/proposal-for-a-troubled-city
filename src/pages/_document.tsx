import { Head, Html, Main, NextScript } from "next/document";

// function getRandomColor() {
//   const colorsArray = Object.values(TailwindColorEnum);
//   const randomColorIndex = Math.floor(Math.random() * colorsArray.length);

//   return colorsArray[randomColorIndex];
// }

export default function Document() {
  return (
    <Html className="h-full bg-yellow-500" lang="en">
      <Head />
      <body className="h-full bg-yellow-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
