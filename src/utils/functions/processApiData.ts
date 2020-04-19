export const processCharactersApiResult = (data: any) => {
  return data.results.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      series: [],
    }
  })
}

export const processSeriesApiResult = (data: any) => {
  return data.results.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
    }
  })
}
