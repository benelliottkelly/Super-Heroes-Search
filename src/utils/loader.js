

// use api to fetch all superheroes
export async function getSuperHeroes(){
  const res = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
  
  return res.json()
}
export async function getHeroSingle(id){
  const res = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
  return res.json()
}










