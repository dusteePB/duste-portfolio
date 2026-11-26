const MovieElement = ({ name, bg, img, color, children }) => {
  return (
    <>
      <hr />
      <div
        className="body bg-top bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <span
          className="smalltitle rounded-[20px] m-1/20"
          style={{ backgroundColor: color }}
        >
          {name}
        </span>
        <div className="flexbox p-12.5">
          <div
            className="wallpaper mb-0"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="mr-7/10">
            <br />
            <br />
            <br />
            date of release : <br />
            <br />
            studio : <br />
            <br />
            genre :
          </div>
        </div>
        <div className="bio rounded-[20px]" style={{ backgroundColor: color }}>
          {children}
        </div>
      </div>
      <hr className="mb-16" />
    </>
  );
};

export default function ShowsPage() {
  return (
    <>
      <MovieElement
        name="CARD CAPTURE SAKURA"
        img="/pics/sakura.jpg"
        bg="/pics/sakura_wallpaper.png"
        color="#ffccd3b3"
      >
        cardcaptor Sakura (Japanese: カードキャプターさくら, Hepburn:
        Kādokyaputā Sakura), abbreviated as CCS, is a Japanese manga series
        written and illustrated by the manga group Clamp. <br />
        Serialized monthly in the shōjo manga magazine Nakayoshi from the June
        1996 to August 2000 issues, it was also published in 12 tankōbon volumes
        by Kodansha between November 1996 and July 2000. <br />
        The story centers on Sakura Kinomoto, an elementary school student who
        discovers magical powers after accidentally freeing a set of magical
        cards into the world; she must retrieve the cards to prevent
        catastrophe. <br />
        Each of these cards grants different magical powers, and can only be
        activated by someone with inherent magical abilities. A sequel by Clamp,
        Cardcaptor Sakura: Clear Card, focusing on Sakura in junior high school,
        <br />
        was serialized in Nakayoshi from the July 2016 to January 2024
        issues."{" "}
      </MovieElement>

      <MovieElement
        name="HIME SAN NO RIBBON"
        img="/pics/himesannoribbon"
        bg="/pics/himesannoribbonswallpaper.jpg"
        color="rgba(242,208,255,0.651)"
      >
        Hime-chan's Ribbon (姫ちゃんのリボン, Hime-chan no Ribon) is a magical
        girl manga series created by Megumi Mizusawa that was serialized in
        Ribon Magazine from August 1990 to January 1994. <br />
        It was later developed into a 61 episode anime series, produced by
        Studio Gallop, that aired from October 2, 1992, to December 3, 1993.{" "}
        <br />
        Hajime Watanabe's first project as a character designer was with
        Hime-chan no Ribbon. The manga series was collected into ten volumes in
        Japan, where it received a full anime DVD release. <br />
        A stage musical of the show was produced in December 1993 starring the
        idol group SMAP. The musical was presented in three episodes, each a
        week apart. SMAP performed the opening theme <br />
        and the three ending themes for the anime and each member appears in
        animated form in episode 13. In 2026, the manga became licensed
        digitally in English on Shueisha's Manga Million platform,[2] <br />
        while the anime still remains currently unlicensed in the United
        States.[3]
      </MovieElement>
      <MovieElement
        name="LUCKY START"
        bg="/pics/luckystarwallpaper.jpg"
        img="/pics/luckystar.jpg"
        color="rgba(243,214,255,0.74)"
      >
        Lucky Star (Japanese: らき☆すた, Hepburn: Raki Suta) is a Japanese
        four-panel comic strip manga series by Kagami Yoshimizu. It has been
        serialized in Kadokawa Shoten's Comptiq magazine since December 2003.{" "}
        <br />
        Cameo strips were published in other magazines such as Shōnen Ace and
        others. Lucky Star is a slice of life manga focusing on the daily lives
        of four girls, and has little overarching plot. <br />
        An audio drama CD based on the series was released in August 2005, and
        the series spawned four video games released between 2005 and 2009. A
        24-episode anime adaptation produced by Kyoto Animation aired between
        April 8 and September 16, 2007. <br />
        The anime was licensed in North America by Kadokawa Pictures and
        distributed by Bandai Entertainment; six DVDs have been released between
        May 2008 and March 2009.[2] An original video animation (OVA) episode
        was released on September 26, 2008[3] <br />
        accompanied by a drama CD. Bandai Entertainment released the OVA in an
        English-sub only version on August 4, 2009. Viz Media acquired the
        rights to publish the manga digitally in 2014.
      </MovieElement>
      <MovieElement
        name="GIRLS UND PANZER"
        bg="/pics/girlsundpanzerwallpaper.jpg"
        img="/pics/girlsundpanzer.jpg"
        color="rgba(214,221,255,0.74)"
      >
        Lucky Star (Japanese: らき☆すた, Hepburn: Raki Suta) is a Japanese
        four-panel comic strip manga series by Kagami Yoshimizu. It has been
        serialized in Kadokawa Shoten's Comptiq magazine since December 2003.{" "}
        <br />
        Cameo strips were published in other magazines such as Shōnen Ace and
        others. Lucky Star is a slice of life manga focusing on the daily lives
        of four girls, and has little overarching plot. <br />
        An audio drama CD based on the series was released in August 2005, and
        the series spawned four video games released between 2005 and 2009. A
        24-episode anime adaptation produced by Kyoto Animation aired between
        April 8 and September 16, 2007. <br />
        The anime was licensed in North America by Kadokawa Pictures and
        distributed by Bandai Entertainment; six DVDs have been released between
        May 2008 and March 2009.[2] An original video animation (OVA) episode
        was released on September 26, 2008[3] <br />
        accompanied by a drama CD. Bandai Entertainment released the OVA in an
        English-sub only version on August 4, 2009. Viz Media acquired the
        rights to publish the manga digitally in 2014.
      </MovieElement>
    </>
  );
}
