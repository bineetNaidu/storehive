import { ClerkProvider } from '@clerk/nextjs/app-beta';
import './globals.css';

export const metadata = {
  title: 'StoreHive',
  description:
    "StoreHive is the ultimate shopping destination for savvy shoppers looking for a hassle-free experience. Our buzzing hive is home to thousands of products, all carefully curated to meet your every need. From fashion and beauty to home goods and electronics, we've got it all. With StoreHive, shopping has never been easier or more enjoyable. Join the hive today and discover the endless possibilities!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
