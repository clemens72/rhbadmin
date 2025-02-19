import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import StarsIcon from '@mui/icons-material/Stars';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ClientLocalizationProvider from './components/ClientLocalizationProvider';

import type { Navigation } from '@toolpad/core/AppProvider';
import { SessionProvider, signIn, signOut } from 'next-auth/react';
import { auth } from '../auth';
import theme from '../theme';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    segment: 'calendar',
    title: 'Calendar',
    icon: <CalendarTodayIcon />,
  },
  {
    segment: 'performances',
    title: 'Performances',
    icon: <StarsIcon />,
  },
  {
    segment: 'rehearsals',
    title: 'Rehearsals',
    icon: <SpatialAudioIcon />,
  },
  {
    segment: 'songs',
    title: 'Songs',
    icon: <MusicNoteIcon />,
  },
];

const BRANDING = {
  title: 'Red Healer Admin',
  logo: <img src="https://drive.google.com/file/d/19YhzSJ4lGbFfDWFjOh4tGgEGY9J37Vpw/view?usp=drive_link" alt="Red Healer Logo" />,
};


const AUTHENTICATION = {
  signIn,
  signOut,
};


export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <ClientLocalizationProvider>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            
              <NextAppProvider
                navigation={NAVIGATION}
                branding={BRANDING}
                session={session}
                authentication={AUTHENTICATION}
                theme={theme}
              >
                {props.children}
              </NextAppProvider>
              
            </AppRouterCacheProvider>
          </ClientLocalizationProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
