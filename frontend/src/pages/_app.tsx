import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import UserProvider from '@/contexts/UserContext';
import NextNProgress from 'nextjs-progressbar';
import Loader from "@/components/global/Loader";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <NextNProgress />
                <Loader />
                <h1>Streamcord</h1>
            </UserProvider>
        </QueryClientProvider>
    )
};

export default MyApp;