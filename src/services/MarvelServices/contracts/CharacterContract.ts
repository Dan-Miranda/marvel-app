interface Item {
  name: string,
  resourceURI: string,
}

interface Serie {
  available: number,
  collectionURI: string,
  items: Array<Item>,
  returned: number,
}

interface Thumbnail {
  extension: string,
  path: string,
}

interface CharacterContract {
  id: number,
  comics: any,
  description: string,
  events: any,
  modified: Date,
  name: string,
  resourceURI: string,
  series: Serie,
  stories: any,
  thumbnail: Thumbnail,
  urls: Array<any>
}

export default CharacterContract;
