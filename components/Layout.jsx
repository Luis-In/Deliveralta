import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div className="Container">
            <Head>
                <title>Deliveralta</title>
                <meta name="description" content="Deliveralta | Entrega de comida a domicilio" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { children }
        </div>
    );
}
 
export default Layout;