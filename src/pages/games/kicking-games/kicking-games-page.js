import { useState } from 'react';
import './kicking-games-page.css'
import '../footbag-games.css';
import { kickingGamesData, hackySackData, twoSquareData, golfData, netData, freestyleData } from '../../../data/games/footbag-games-data.js';
import FootbagGameHeader from '../header/footbag-game-header';

const kickingGames = [hackySackData, twoSquareData, golfData];

const kickingGameHeader = {
  title: kickingGamesData.title,
  otherGames: [ netData, freestyleData],
};

function KickingGamesPage() {
  const [isSingleColumnView, setIsSingleColumnView] = useState(shouldUseSingleColumnView());

  window.addEventListener('resize', () => {
    if(shouldUseSingleColumnView() === true) {
      setIsSingleColumnView(true);
    } else {
      setIsSingleColumnView(false);
    }
  })

  function shouldUseSingleColumnView() {
    return window.innerWidth <= 750;
  }  

  function HeaderIcons() {
    if(isSingleColumnView === false) {
      return (
        <div id="kicking-games-header-icons">
          {
            kickingGames.map(kickingGame =>
              <div key={`kicking-game-icon_${kickingGame.title}`}>
                <img className="footbag-game-icon" src={kickingGame.icon_withBackground} alt={`Icon for ${kickingGame.title}`} />
              </div>
            )
          }
        </div>
      );
    } else {
      return null;
    }
  }

  function KickingGameItem(props) {
    const kickingGame = props.kickingGame;
    const index = props.index;

    return (
      <div className={`kicking-game-container ${isSingleColumnView === false ? 'footbag-game-section' : ''} ${index % 2 == 0 ? 'kicking-game-odd footbag-game-section-with-background' : 'kicking-game-even'}`}>
        <div>
          { (isSingleColumnView === true || index % 2 == 0) && <img className="footbag-game-icon" src={kickingGame.icon} alt={`Icon for ${kickingGame.title}`} /> }
        </div>
        <div>
          <h2 className="footbag-game-section-header">{kickingGame.title}</h2>
          <p>{kickingGame.description.long_html}</p>
          <img src={kickingGame.gif} alt={`Gif of ${kickingGame.title}`} className="footbag-game-gif" />
          <div>
            <strong>MORE INFO</strong>
            <ul>
              {
                kickingGame.howToPlay.resources.map((resource, resourceIndex) => 
                  <li key={`kicking-game-link_${resourceIndex}`}>
                    <a href={resource.link}>{resource.description}</a>
                  </li>
                )
              }
            </ul>
          </div>          
        </div>
        <div>
          { (isSingleColumnView === false && index % 2 == 1) && <img className="footbag-game-icon" src={kickingGame.icon_withBackground} alt={`Icon for ${kickingGame.title}`} /> }
        </div>
      </div>
    );
  }

	return (
		<div>
      <FootbagGameHeader headerData={kickingGameHeader}>
        <HeaderIcons />
      </FootbagGameHeader>
			<div>
				{
          kickingGames.map((kickingGame, index) =>
            <KickingGameItem kickingGame={kickingGame} index={index} key={`kicking-game_${kickingGame.title}`} />
          )
        }
			</div>
		</div>
	);
}

export default KickingGamesPage;
