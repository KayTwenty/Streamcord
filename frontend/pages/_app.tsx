import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import UserProvider from '@/contexts/UserContext';
import { WebSocketProvider } from '@/contexts/WebsocketContext';
import "../styles/globals.css";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <NextNProgress />
                <WebSocketProvider>
                    <Component {...pageProps} />
                </WebSocketProvider>
            </UserProvider>
        </QueryClientProvider>
    )
};

export default MyApp;