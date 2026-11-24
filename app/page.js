export default function HomePage() {
  return (
    <>
      <div className="text-center">
        <div className="flex justify-between">
          <div>
            <a className="smalllink" href="#about_me">
              {" "}
              about me{" "}
            </a>
            <a className="smalllink" href="#on_projects">
              {" "}
              my ongoing projects{" "}
            </a>
            <a className="smalllink" href="#fin_projects">
              {" "}
              my finished projects{" "}
            </a>
            <a className="smalllink" href="#contact">
              {" "}
              contact me{" "}
            </a>
          </div>

          <br />
        </div>
        <a
          className="decoration-transparent inline-block transition-transform text-[rgb(95,8,146)] text-8xl align-text-center m-auto"
          href="#home"
        >
          dustePB
        </a>
        <div>presents, my portfolio!</div>
      </div>
      <hr />
      <div className="body align-text-center">
        <br /> <br />
        <div className="flex justify-between p-12.5">
          <div>
            <div className="smalltitle" id="about_me">
              know a little about me!
            </div>

            <div className="text-gray-600 text-lg">
              I'm dustePB also known as duste sensei, duste, dusteP.
              <br />
              I make art, and i know html css and javascript.
              <br />
            </div>
            <br />
            <div className="text-gray-600 text-lg">
              {" "}
              I'm a 16 year-old student majoring in math~! I live in
              <span className="text-red-600"> IRAN</span> but
              <br /> I'm ethnically
              <span className="text-blue-500"> KAZAKH.</span>
              <br />I have a<span className="text-red-600"> FUMO</span> btw btw.
              <br /> I am also making a manga called periodic days.
              <br /> And developing a game called project 001.
              <br /> But im no pro coder, just your avg person ♥️
            </div>
            <br />
            <br />
            <div className="text-4xl">
              I use <span className="text-green-400">MANJAROO </span> btw!
            </div>
          </div>

          <div className="fastfetch text-center">
            <pre className="max-h-fit">
              {`
duste@archlinux
---------------
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⡠⠤⡀
⠀⠀⠀⠀⠀⡠⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠄⢳⠒⠁
⠀⠀⠀⠀⠀⠃⢰⠓⠤⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⠐⠈⠀⠀⢘⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠈⠑⠂⠄⠀⢀⣀⣀⢀⡀⣠⡁⠀⠀⠀⠀⠀⡅⠀⠀
⠀⠀⣀⣀⡀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠋⠀⠀⢀⣀⣀⡀⠈⠑⠤⡀⠀⠀⡇⠀⠀
⢀⣠⣿⣿⡇⠀⠀⢁⠀⠀⠀⠀⠀⠀⠀⠀⢰⠿⣿⡟⢻⠀⠀⠀⠘⢦⠔⠀⠀⠀
⠘⠿⣿⠿⠇⢀⣤⣈⡀⢲⠀⠀⠀⠀⢀⠤⢈⡓⠿⠿⣋⠔⠢⢀⠀⠀⡆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠙⢻⢦⣄⠀⠔⠁⠀⠀⠀⠉⠈⠀⢀⣤⣗⠣⠀⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡀⠈⢹⠀⠸⠒⠢⠀⠀⠠⡠⠘⢿⣟⡀⢂⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⢂⠰⣶⡖⠀⢰⡠⠊⠀⠈⢉⡽⠂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢄⠝⠒⠓⠠⠤⠀⠀⠤⠤⣐⠚⢅⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠉⠉⠙⠤⡠⠔⠑⠢⡤⢅⠉⠘⠀⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢒⠃⠀⠀⠀⢑⡊⠀⠀⠀⠀⠀⠀⠀⠀
OS: Manjaroo Linux
WM: i3
CPU: Intel i5-3470
GPU: RTX 5090ti 32GB
Memory: 6 GB`}
            </pre>
          </div>
        </div>
      </div>

      <div>
        <div
          className="text-blue-600 mt-8 mb-8 m-auto text-center text-6xl"
          id="on_projects"
        >
          on going projects.
        </div>
      </div>
      <div className="body text-center">
        <div className="flex justify-between">
          <div className="m-auto">
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/unselectedperiodic.png)" }}
              href="index2.html"
            >
              {" "}
            </a>

            <a href="index2.html" className="smallname">
              periodic days
            </a>
          </div>
          <div style={{ margin: "auto" }}>
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/unselected001.png)" }}
            >
              {" "}
            </a>
            <div className="smallname"> project 001</div>
          </div>
        </div>
      </div>
      <div
        id="fin_projects"
        className="text-blue-600 mt-8 mb-8 m-auto text-center text-6xl"
      >
        finished projects.
      </div>
      <div className="body text-center">
        <div className="flexbox">
          <div style={{ margin: "auto" }}>
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/placeholder.jpg)" }}
              href="index2.html"
            >
              {" "}
            </a>

            <a href="index2.html" className="smallname">
              ???
            </a>
          </div>
          <div style={{ margin: "auto" }}>
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/unselectedgame.png)" }}
              href="index_game.html"
            >
              {" "}
            </a>
            <div className="smallname"> games</div>
          </div>

          <div style={{ margin: "auto" }}>
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/unselectedart.png)" }}
            >
              {" "}
            </a>
            <div className="smallname">illustrations</div>
          </div>
        </div>
      </div>

      <div className="text-blue-600 mt-8 mb-8 m-auto text-center text-6xl">
        intrests.
      </div>
      <div className="body text-center">
        <div className="flexbox">
          <div style={{ margin: "auto" }}>
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/shows.png)" }}
              href="index_shows.html"
            >
              {" "}
            </a>
            <a className="smallname">shows</a>
          </div>
          <div style={{ margin: "auto" }}>
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/history.png)" }}
              href="indexhistory.html"
            >
              {" "}
            </a>
            <div className="smallname">history</div>
          </div>
          <div style={{ margin: "auto" }}>
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/songs.png)" }}
              href="indexmv.html"
            >
              {" "}
            </a>
            <div className="smallname">songs</div>
          </div>
          <div className="m-auto">
            <a
              className="projectbox"
              style={{ backgroundImage: "url(pics/games.jpg)" }}
              href="indexgame.html"
            >
              {" "}
            </a>
            <div className="smallname">games</div>
          </div>
        </div>
        <div className="flexbox">
          <br />
        </div>
      </div>

      <div>
        <div className="body text-center">
          <a
            target="_blank"
            href="https://hoogmeh.touhou.ir"
            className="mainlink"
          >
            also check out my friend
          </a>
        </div>
      </div>
      <footer className="m-auto w-fit">
        <div>© 2026 dustePB</div>
        <div>Made with love</div>
      </footer>
    </>
  );
}
