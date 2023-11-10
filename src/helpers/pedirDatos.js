import data from "../data/data.json";

export const pedirDatos = () => {
  return new Promise((resolve, rejet) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
