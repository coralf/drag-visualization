import Config from "../config";

export const pxToRem = (px: number | string) => {
  let newPx = px;
  if (typeof newPx === 'string') {
    const [numPx] = newPx.split('px');
    newPx = numPx;
  }
  return Number(newPx) / Config.fontSize;
}

export const remToPx = (rem: number | string) => {
  let newRem = rem;
  if (typeof newRem === "string") {
    const [numRem] = newRem.split('rem');
    newRem = numRem;
  }
  return Number(newRem) * Config.fontSize;
}




