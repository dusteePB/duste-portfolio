export const metadata = {
  title: 'dustePB — Portfolio',
};

export const viewport = {
  width: null,
  initialScale: null,
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ultra&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundImage: 'url(pics/sparkles.gif)' }}>
        {children}
      </body>
    </html>
  );
}
