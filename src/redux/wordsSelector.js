import { createSelector } from "reselect";
import randomFn from "./apparatusFn/randomFn";
import { random } from "../utils/englishTreningApparatus/randomWord";

export const getIdioms = (state) => {
  return state.words.idioms;
};

export const getCertainIdiom = (state) => {
  return state.words.certainIdiom;
};

export const getDataVerb = (state) => {
  return state.words.dataVerb;
};

export const getSpellCheckOpt = (state) => {
  return state.words.spellCheckOpt;
};

export const getRandomItemWithOpt = (state) => {
  return random(getSpellCheckOpt(state));
};

export const getExamenList = (state) => {
  return state.words.examen;
};

export const getItemWithOpt = createSelector(
  getSpellCheckOpt,
  getExamenList,
  (item) => {
    if (item.length === 0) {
      return {};
    } else {
      let element = random(item);
      let newObject = (arr) => {
        let indificator = random([
          "baseForm",
          "gerund",
          "pastParticiple",
          "pastSimple",
        ]);
        let newArr = {
          id: element.id,
          translate: element.translate,
          check: [indificator, element[indificator]],
        };
        return newArr;
      };
      let createObject = newObject(element);
      return createObject;
    }
  }
);

export const getShowResult = (state) => {
  return state.words.showResult;
};

export const getName = (state) => {
  return state.words.name;
};

export const getNameSelector = createSelector((iYouHeShe) => {
  return iYouHeShe[Math.floor(Math.random() * iYouHeShe.length)];
});

export const getVerb = (state) => {
  return state.words.verb;
};

export const getVerbTwo = (state) => {
  return state.words.verbTwo;
};

export const getIYouHeShe = (state) => {
  return state.words.iYouHeShe;
};

export const getIsChange = (state) => state.words.isChange;
