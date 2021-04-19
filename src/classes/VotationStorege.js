export default class VotationStorege {
  constructor(key) {
    if (!localStorage[key])
      localStorage.setItem(
        key,
        JSON.stringify({
          total: 0,
          nulo: 0,
          branco: 0,
        })
      );
  }
  get(key) {
    return JSON.parse(localStorage[key]);
  }
  vota(key) {
    const obj = JSON.parse(localStorage[key]);
    obj.total += 1;
    localStorage.setItem(key, JSON.stringify(obj));
  }
  nullo(key) {
    const obj = JSON.parse(localStorage[key]);
    obj.nulo += 1;
    localStorage.setItem(key, JSON.stringify(obj));
  }
  branco(key) {
    const obj = JSON.parse(localStorage[key]);
    obj.branco += 1;
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
