import E01NicknameRemember from "../screens/Workshop-Ende/01_NicknameRemember";
import E02Spass from "../screens/Workshop-Ende/02_Spass";
import E03Interesse from "../screens/Workshop-Ende/03_Interesse";
import E04Technologie from "../screens/Workshop-Ende/04_Technologie";
import E05Programme from "../screens/Workshop-Ende/05_Programme";
import E06Betreuung from "../screens/Workshop-Ende/06_Betreuung";
import E073DDruck from "../screens/Workshop-Ende/07_3DDruck";
import E08VR from "../screens/Workshop-Ende/08_VR";
import E09Laser from "../screens/Workshop-Ende/09_Laser";
import E103DModelling from "../screens/Workshop-Ende/10_3DModelling";
import E11Erwartungen from "../screens/Workshop-Ende/11_Erwartungen";
import E12NextTime from "../screens/Workshop-Ende/12_NextTime";
import E13Atmo from "../screens/Workshop-Ende/13_Atmo";
import E14Angebot from "../screens/Workshop-Ende/14_Angebot";
import E15Engagieren from "../screens/Workshop-Ende/15_Engagieren";
import E16AnythingElse from "../screens/Workshop-Ende/16_AnythingElse";
import E17Ende from "../screens/Workshop-Ende/17_Ende";

const surveyWorkshopEnd = {
  baseUrl: "wiewars",
  surveyItems: [
    {
      questionId: "nickname",
      screenComponent: E01NicknameRemember,
    },
    {
      questionId: "spass",
      screenComponent: E02Spass,
    },
    {
      questionId: "interesse",
      screenComponent: E03Interesse,
    },
    {
      questionId: "technologie",
      screenComponent: E04Technologie,
    },
    {
      questionId: "programme",
      screenComponent: E05Programme,
    },
    {
      questionId: "betreuung",
      screenComponent: E06Betreuung,
    },
    {
      questionId: "dreiDDruck",
      screenComponent: E073DDruck,
    },
    {
      questionId: "vr",
      screenComponent: E08VR,
    },
    {
      questionId: "laser",
      screenComponent: E09Laser,
    },
    {
      questionId: "dreiDModelling",
      screenComponent: E103DModelling,
    },
    {
      questionId: "erwartungen",
      screenComponent: E11Erwartungen,
    },
    {
      questionId: "nextTime",
      screenComponent: E12NextTime,
    },
    {
      questionId: "atmo",
      screenComponent: E13Atmo,
    },
    {
      questionId: "angebot",
      screenComponent: E14Angebot,
    },
    {
      questionId: "engagieren",
      screenComponent: E15Engagieren,
    },
    {
      questionId: "anythingElse",
      screenComponent: E16AnythingElse,
      isFinal: true,
    },
    {
      questionId: "ende",
      screenComponent: E17Ende,
    },
  ],
};

export default surveyWorkshopEnd;
