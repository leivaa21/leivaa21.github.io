
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

class Doc extends Document{

  static async getInitialProps( ctx: DocumentContext ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  
  render() {
    return (
      <Html>
        <Head>
          {/** Meta tags Here! */}
          <link rel="icon" type="image/png" href="/icons/favicon.png"/>
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html> 
    )
  }
}

export default Doc;