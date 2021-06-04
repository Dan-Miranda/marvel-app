export interface CharacterContract {
  id: number,
  comics: any,
  description: string,
  events: any,
  modified: Date,
  name: string,
  resourceURI: string,
  series: any,
  stories: any,
  thumbnail: any,
  urls: Array<any>
}

export interface ResponseDataApi<T> {
  count: number,
  limit: number,
  offset: 0,
  results: Array<T>,
  total: number
}

export interface ResponseApiContract {
  attributionHTML: string,
  attributionText: string,
  code: number,
  copyright: string,
  data: ResponseDataApi<CharacterContract>,
  etag: string,
  status: string,
}
