import React from 'react';

import erenM from '../../assets/images/erenm.webp';
import mikasa from '../../assets/images/mikasa.webp';
import reiner from '../../assets/images/reiner.png';
import levi from '../../assets/images/levi.png';

import './Follow.scss';

const Follow = () => {
  return (
    <div class='follow-main'>
      <div class='follow-left'>
        <img src={erenM} alt='eren' />
        <img src={mikasa} alt='mikasa' />
        <img src={reiner} alt='reiner' />
        <img src={levi} alt='levi' />
      </div>
      <div class='follow-right'>
        <h2>Facist Subtext in Attack on Titan?</h2>
        <div class='underline'></div>
        <p>
          <span>Attack On Titan</span> is an ongoing Japanese comic book series
          written and illustrated by Hajime Isayama, who, growing up in the
          countryside of Ōita Prefecture, Japan,2 landed upon a simple but
          disturbing truth: Because all living organisms must feed on other
          living organisms to survive, the world is an inherently cruel place.
          Life, by definition, undermines ethical considerations. Or so it might
          seem. Unlike so many of the powerful but problematic ideas that cement
          themselves into the minds of children, only to be abandoned upon the
          arrival of adulthood, this one stuck around for Isayama, at least as a
          problem to be addressed.
        </p>
        <p>
          His manga tells the story of a world in which people live under the
          constant threat of being eaten alive by naked, mindless, humanoid
          giants. The idea is not original. Humans have, in science fiction,
          often been flipped by circumstance into serving as dinner for an alien
          species (even as we actually are for any number of terrestrial
          species, from bacteria to bears and lions, if we're unlucky). But
          Isayama has connected this evolutionary trope to a sociological
          concern toward the growing attraction in the world for
          autocratic—often sociopathic—forms of governance. Published in 2009,
          the manga, alongside its anime adaptation, quickly grew into a global
          pop-culture phenomenon. Part of Isayama's success can be attributed to
          the grotesque allure of his (eventual) drawings; another, to the
          surprisingly sophisticated incorporation of Nazi ideology into his
          narrative.
        </p>
        <p>
          But, in sum, the anime series poses disturbing questions for a society
          that has drawn its economic and political strength from imperialism,
          especially, as with Japan, from a totalitarian past—or, as with the
          United States, from a periodic appetite for totalitarian leadership.
        </p>
        <span class='citation'>
          Brinkhof, Tim. "Revisiting the Fascist Subtext of Attack on Titan:
          Some Notes on a Modern Reactionary Anime." Film & History: An
          Interdisciplinary Journal, vol. 51 no. 2, 2021, p. 21-29. Project
          MUSE, doi:10.1353/flm.2021.0005.
        </span>
        <br />
        <button class='link-button'>Click for more </button>
      </div>
    </div>
  );
};

export default Follow;
