import { CatResponse } from "../types"

export const imagesRandomizer = (cats: CatResponse[], size: number) => {
  if(cats) {
    // API not reliable, it usually returns 10 items regardless the query
    const imagesNeeded = cats.slice(0, size)
    let imagePairs = [...imagesNeeded, ...imagesNeeded] 
    // shuffle values
    imagePairs = imagePairs.sort(_ => Math.random() - 0.5)
    return imagePairs
  } else {
    return []
  }
}