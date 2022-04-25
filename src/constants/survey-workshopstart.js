import S01Anmeldung from "../screens/Workshop-Anfang/01_Anmeldung";
import S02Alter from "../screens/Workshop-Anfang/02_Alter";
import S03Postleitzahl from "../screens/Workshop-Anfang/03_Postleitzahl";
import S04Geschlecht from "../screens/Workshop-Anfang/04_Geschlecht";
import S05Besuch from "../screens/Workshop-Anfang/05_Besuch";
import S06Erwartungen from "../screens/Workshop-Anfang/06_Erwartungen";
import S07Interesse from "../screens/Workshop-Anfang/07_Interesse";
import S08Vorerfahrung from "../screens/Workshop-Anfang/08_Vorerfahrung";
import S09AnzahlTage from "../screens/Workshop-Anfang/09_AnzahlTage";
import S10Ort from "../screens/Workshop-Anfang/10_Ort";
import S11Werbung from "../screens/Workshop-Anfang/11_Werbung";
import S12Grund from "../screens/Workshop-Anfang/12_Grund";
import S13Nickname from "../screens/Workshop-Anfang/13_Nickname";
import S14Ende from "../screens/Workshop-Anfang/14_Ende";

export default {
  baseUrl: "losgehts",
  surveyItems: [
    {
      questionId: "anmeldung",
      screenComponent: S01Anmeldung,
    },
    {
      questionId: "alter",
      screenComponent: S02Alter,
    },
    {
      questionId: "postleitzahl",
      screenComponent: S03Postleitzahl,
    },
    {
      questionId: "geschlecht",
      screenComponent: S04Geschlecht,
    },
    {
      questionId: "besuch",
      screenComponent: S05Besuch,
    },
    {
      questionId: "erwartungen",
      screenComponent: S06Erwartungen,
    },
    {
      questionId: "interesse",
      screenComponent: S07Interesse,
    },
    {
      questionId: "vorerfahrung",
      screenComponent: S08Vorerfahrung,
    },
    {
      questionId: "anzahlTage",
      screenComponent: S09AnzahlTage,
    },
    {
      questionId: "ort",
      screenComponent: S10Ort,
    },
    {
      questionId: "werbung",
      screenComponent: S11Werbung,
    },
    {
      questionId: "grund",
      screenComponent: S12Grund,
    },
    {
      questionId: "nickname",
      screenComponent: S13Nickname,
      isFinal: true,
    },
    {
      questionId: "ende",
      screenComponent: S14Ende,
    },
  ],
};
