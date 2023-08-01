import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Nunito} from "next/font/google";
import store from "@/utils/store/store";
import {Provider} from 'react-redux'


const nunito = Nunito({
    weight: ["400"],
    subsets: ["latin"],
});

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <main className={nunito.className}>
                <Component {...pageProps} />
            </main>
        </Provider>
    );
}
