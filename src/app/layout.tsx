import { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { StyledComponentsRegistry } from '@/theme/StyledComponentsRegistry';
import { ThemeContextProvider } from '@/app/Context/theme-context/ThemeContextProvider';
import { GlobalStyles } from '@/theme/theme/GlobalStyles';
import { BoardContextProvider } from '@/app/Context/board-context/BoardContextProvider';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Kanban Task',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <BoardContextProvider>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </BoardContextProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
