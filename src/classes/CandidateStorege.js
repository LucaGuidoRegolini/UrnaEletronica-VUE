/* eslint-disable no-unused-vars */
import Candidate from "./Candidate";
import VotationStorege from "./VotationStorege";
const votationStorege = new VotationStorege("votation");
export default class CandidateStorege {
  constructor(key) {
    if (!localStorage[key])
      localStorage.setItem(key, JSON.stringify({}));
  }
  getAll(key) {
    const objs = JSON.parse(localStorage[key]);
    let array = [];
    for (let props in objs) array.push(objs[props]);
    return array;
  }
  get(key, num) {
    const objs = JSON.parse(localStorage[key]);
    if (objs[num]) {
      return objs[num];
    } else return new Candidate("nulo", "", "nulo", "0");
  }
  set(key, name, data) {
    const obj = JSON.parse(localStorage[key]);
    if (obj[name]) {
      throw new URIError("propriedade ja existente");
    } else {
      obj[name] = data;
      localStorage.setItem(key, JSON.stringify(obj));
    }
  }
  delete(key, prop) {
    const objs = JSON.parse(localStorage[key]);
    let resp = delete objs[prop];
    localStorage.setItem(key, JSON.stringify(objs));
    return resp;
  }
  vote(key, prop) {
    const obj = JSON.parse(localStorage[key]);
    if (obj[prop]) {
      obj[prop].votos += 1;
      localStorage.setItem(key, JSON.stringify(obj));
      votationStorege.vota("votation");
      return true;
    } else {
      votationStorege.vota("votation");
      votationStorege.nullo("votation");
      return false;
    }
  }
}
