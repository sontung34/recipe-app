export function getIngredientMeasure(meal){
    const pairs = []
    for (let i = 1; i <= 30; i++) {
      const ingredient = meal['strIngredient' + i]
      const measure = meal['strMeasure' + i]
      if (ingredient && measure) {
        pairs.push({ ingredient, measure })
      }
    }
    return pairs
  }
export function getYouTubeID(url) {
    const regex = /[?&]v=([^&#]*)/
    const match = url.match(regex)
    return match ? match[1] : null
  }