import '@/styles/globals.css';
import '@/styles/navbar.css';
import '@/styles/home.css';
import '@/styles/dashboard.css';
import '@/styles/card.css';
import '@/styles/easy.css';

import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }) {
  return(
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    )
}
