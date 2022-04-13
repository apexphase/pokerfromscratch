import "./pokerstars.css";
import image1 from "./images/image.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";

import { Navbar, NavItem } from "react-bootstrap";

import { Scrollchor } from "react-scrollchor";

export default function Pokerstars() {
  return (
    <div>
      <div class="container border justify-content-center anchorbar">
        <Navbar class="navbar-fixed-top">
          <NavItem>
            <Scrollchor to="#pokerstarsclient" className="nav-link">
              Pokerstars Client
            </Scrollchor>
          </NavItem>
          <NavItem>
            <Scrollchor to="#discord" className="nav-link">
              Discord Voice and Video Chat
            </Scrollchor>
          </NavItem>
          <NavItem>
            <Scrollchor to="#venmo" className="nav-link">
              Venmo Information
            </Scrollchor>
          </NavItem>
        </Navbar>
      </div>
      <div class="container border">
        <h2 id="pokerstarsclient">Pokerstars Info</h2>
        <div />
        <p>
          <strong>
            The tournament starts at 8:30 every Thursday night which means you
            have to "register" for the game sometime before then.{" "}
          </strong>
        </p>
        <div />
        <p>
          First,{" "}
          <a href="https://www.pokerstars.bet/?no_redirect=1">
            download and install
          </a>{" "}
          Pokerstars.net client for your PC or laptop. (you can use Mac too)
        </p>
        <div class="spacer" />
        <p>
          Click Download. Download the file and run or open it to install. Once
          it installs you'll have to register/sign in. The application should
          walk you through that. Once you register and sign in to the app you
          should see the lobby. On the right (you may have to click More) you'll
          see Home Games. Click that.{" "}
        </p>
        <div class="spacer" />
        <img
          src={image1}
          class="img-fluid rounded mx-auto d-block"
          alt="Pokerstars Home Example"
        />
        <div class="spacer" />
        <p>Then click Join a Poker Club </p>
        <img
          src={image2}
          class="img-fluid rounded mx-auto d-block"
          alt="Pokerstars Join a Club"
        />
        <div class="spacer" />
        <div class="border">
          <p>The club ID is 3510612 </p>
          <p>The invitation Code is 830blackchip</p>
        </div>
        <div class="spacer" />
        <p>
          Once you've joined this way, I will be notified and I just have to go
          in and accept your request into the club. Once this is done, you'll be
          able to double click on the club listed on the Home Game screen, then
          click on Schedule and you'll see the Thursday game listed. You can
          double click it to register for it.
        </p>
        <p>
          The game itself uses Play Chips which you have to have available to
          play (we had no other option). You can add play chips for free on a 4
          hour countdown from the main screen. Look for the button listed below
          in the upper right.
        </p>
        <div class="spacer" />
        <img
          src={image3}
          class="img-fluid rounded mx-auto d-block"
          alt="Pokerstars Get Play Chips Example"
        />
        <div class="spacer" />
        <h2 id="discord">Discord Voice and Video Chat</h2>
        <p>
          We have a voice communication program we use which is free and will
          allow you to communicate with everyone with a webcam or just a mic.
          It's called <a href="https://discord.com/">Discord</a>. I recommend
          using ear buds or a headset if you install it on your phone. You can
          also install it on your PC (which I recommend). This is entirely
          optional.
        </p>
        <p>
          Once you go to the <a href="https://discord.com/">Discord</a> page.
          Just download the Windows/Mac app to install the client. You'll need
          to register an account. Once you're registered you can click the
          invite link to join the Discord group, Intervale Poker.{" "}
        </p>
        <a href="https://discord.gg/4Qnz95F">https://discord.gg/4Qnz95F</a>
        <p>
          Once you've joined, you'll see the icon for the server on the left
          side:
        </p>
        <img
          src={image4}
          class="img-fluid rounded mx-auto d-block"
          alt="Discord Example"
        />
        <p>In the server you can join a voice channel by clicking on it</p>
        <img
          src={image5}
          class="img-fluid rounded mx-auto d-block"
          alt="Discord Example"
        />
        <div class="spacer" />
        <h2 id="venmo">Venmo information</h2>
        <p>
          We use Venmo. Please do not make me track you down. If you buyin, send
          me $25 for the buyin right away. If you rebuy, send me $25 for the
          rebuy. I will generally handle payouts the following day.
        </p>
        <p>
          You can find me on Venmo, send me a friend request. My ID is{" "}
          <a href="https://account.venmo.com/u/Brandon-Billings-1">
            @Brandon-Billings-1
          </a>
        </p>
        <p>
          Please make sure to include your name on Pokerstars with your friend
          request or buyin.
        </p>
        <div class="spacer" />
        <p>If you have any questions or concerns, e-mail me: </p>
        <a href="mailto:brandonbillings81@gmail.com?subject = Poker">
          brandonbillings81@gmail.com
        </a>
      </div>
    </div>
  );
}
