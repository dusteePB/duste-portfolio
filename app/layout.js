import "@/app/globals.css";

export const metadata = {
  title: "dustePB — Portfolio",
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
      <body style={{ backgroundImage: "url(/pics/sparkles.gif)" }}>
        <div className="text-center">
          <div className="flex justify-between">
            <div>
              <a className="smalllink" href="#about_me">
                about me
              </a>
              <a className="smalllink" href="#on_projects">
                my ongoing projects
              </a>
              <a className="smalllink" href="#fin_projects">
                my finished projects
              </a>
              <a className="smalllink" href="#contact">
                contact me
              </a>
            </div>

            <br />
          </div>
          <a
            className="decoration-transparent inline-block transition-transform text-[rgb(95,8,146)] text-8xl align-text-center m-auto"
            href="/"
          >
            dustePB
          </a>
          <div>presents, my portfolio!</div>
        </div>
        <hr />
        {children}
        <footer className="m-auto w-fit">
          <div>© 2026 dustePB</div>
          <div>Made with love</div>
        </footer>
      </body>
    </html>
  );
}
