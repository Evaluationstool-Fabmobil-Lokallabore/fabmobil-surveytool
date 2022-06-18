import img1 from "../assets/pictograms/FM-Emoji_mitRand1.png";
import img2 from "../assets/pictograms/FM-Emoji_mitRand3.png";
import img3 from "../assets/pictograms/FM-Emoji_mitRand11.png";
import img4 from "../assets/pictograms/FM-Emoji_mitRand12.png";
import img5 from "../assets/pictograms/FM-Emoji_mitRand15.png";
import img6 from "../assets/pictograms/FM-Emoji_mitRand16.png";
import img7 from "../assets/pictograms/FM-Emoji_mitRand17.png";
import img8 from "../assets/pictograms/FM-Emoji_mitRand18.png";
import img9 from "../assets/pictograms/FM-Emoji_mitRand19.png";
import img10 from "../assets/pictograms/FM-Emoji_mitRand20.png";
import img11 from "../assets/pictograms/FM-Emoji_mitRand21.png";
import img12 from "../assets/pictograms/FM-Emoji_mitRand24.png";
import img13 from "../assets/pictograms/FM-Emoji_mitRand30.png";
import img14 from "../assets/pictograms/FM-Emoji_mitRand32.png";
import img15 from "../assets/pictograms/FM-Emoji_mitRand33.png";
import img16 from "../assets/pictograms/FM-Emoji_mitRand34.png";
import img17 from "../assets/pictograms/FM-Emoji_mitRand50.png";
import img18 from "../assets/pictograms/FM-Emoji_mitRand51.png";
import img19 from "../assets/pictograms/FM-Emoji_mitRand55.png";
import img20 from "../assets/pictograms/FM-Emoji_mitRand57.png";
import img21 from "../assets/pictograms/FM-Emoji_mitRand58.png";
import img22 from "../assets/pictograms/FM-Emoji_mitRand61.png";
import img1_ from "../assets/pictograms/FM-Emoji_ohneRand1.png";
import img2_ from "../assets/pictograms/FM-Emoji_ohneRand3.png";
import img3_ from "../assets/pictograms/FM-Emoji_ohneRand11.png";
import img4_ from "../assets/pictograms/FM-Emoji_ohneRand12.png";
import img5_ from "../assets/pictograms/FM-Emoji_ohneRand15.png";
import img6_ from "../assets/pictograms/FM-Emoji_ohneRand16.png";
import img7_ from "../assets/pictograms/FM-Emoji_ohneRand17.png";
import img8_ from "../assets/pictograms/FM-Emoji_ohneRand18.png";
import img9_ from "../assets/pictograms/FM-Emoji_ohneRand19.png";
import img10_ from "../assets/pictograms/FM-Emoji_ohneRand20.png";
import img11_ from "../assets/pictograms/FM-Emoji_ohneRand21.png";
import img12_ from "../assets/pictograms/FM-Emoji_ohneRand24.png";
import img13_ from "../assets/pictograms/FM-Emoji_ohneRand30.png";
import img14_ from "../assets/pictograms/FM-Emoji_ohneRand32.png";
import img15_ from "../assets/pictograms/FM-Emoji_ohneRand33.png";
import img16_ from "../assets/pictograms/FM-Emoji_ohneRand34.png";
import img17_ from "../assets/pictograms/FM-Emoji_ohneRand50.png";
import img18_ from "../assets/pictograms/FM-Emoji_ohneRand51.png";
import img19_ from "../assets/pictograms/FM-Emoji_ohneRand55.png";
import img20_ from "../assets/pictograms/FM-Emoji_ohneRand57.png";
import img21_ from "../assets/pictograms/FM-Emoji_ohneRand58.png";
import img22_ from "../assets/pictograms/FM-Emoji_ohneRand61.png";

import robo1 from "../assets/robi-gifs/Robi_auftritt-once-min.gif";
import robo2 from "../assets/robi-gifs/Robi_buttons-min.gif";
import robo3 from "../assets/robi-gifs/Robi_goodbad-min.gif";
import robo4 from "../assets/robi-gifs/Robi_heart-min.gif";
import robo5 from "../assets/robi-gifs/Robi_longarmslide-min.gif";
import robo6 from "../assets/robi-gifs/Robi_longarmtouch-min.gif";
import robo7 from "../assets/robi-gifs/Robi_lookaround-min.gif";
import robo8 from "../assets/robi-gifs/Robi_onebuttons_langsam-min.gif";
import robo9 from "../assets/robi-gifs/Robi_slider-min.gif";
import robo10 from "../assets/robi-gifs/Robi_sprung-min.gif";
import robo11 from "../assets/robi-gifs/Robi_tastatur_agro-min.gif";
import robo12 from "../assets/robi-gifs/Robi_tastatur-min.gif";
import robo13 from "../assets/robi-gifs/Robi_touch_hochkant-min.gif";
import robo14 from "../assets/robi-gifs/Robi_touch-min.gif";
import robo15 from "../assets/robi-gifs/Robi_winken-min.gif";

const pictograms = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img1_,
  img2_,
  img3_,
  img4_,
  img5_,
  img6_,
  img7_,
  img8_,
  img9_,
  img10_,
  img11_,
  img12_,
  img13_,
  img14_,
  img15_,
  img16_,
  img17_,
  img18_,
  img19_,
  img20_,
  img21_,
  img22_,
];

const roboGifs = [
  robo1,
  robo2,
  robo3,
  robo4,
  robo5,
  robo6,
  robo7,
  robo8,
  robo9,
  robo10,
  robo11,
  robo12,
  robo13,
  robo14,
  robo15,
];

export function preloadPictograms() {
  pictograms.forEach((img) => (new Image().src = img));
}

export function preloadRoboGifs() {
  roboGifs.forEach((img) => (new Image().src = img));
}
