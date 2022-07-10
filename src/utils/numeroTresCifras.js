export const numeroTresCifras = (numero) => {
  let numeroConvertido = ("000" + numero).slice(-3);
  return numeroConvertido;
};
