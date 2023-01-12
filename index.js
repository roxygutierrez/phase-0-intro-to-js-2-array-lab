const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (cat) => {
  cats.push(cat);
};

const destructivelyPrependCat = (cat) => {
  cats.unshift(cat);
};

const destructivelyRemoveLastCat = (cat) => {
  cats.pop(cat);
};

const destructivelyRemoveFirstCat = (cat) => {
  cats.shift(cat);
};

const appendCat = (cat) => {
  return [...cats, cat];
};

const prependCat = (cat) => {
  return [cat, ...cats];
};

const removeLastCat = (cat) => {
  return cats.slice(0, 2);
};

const removeFirstCat = (cat) => {
  return cats.slice(1);
};
