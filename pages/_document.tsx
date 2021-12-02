import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
