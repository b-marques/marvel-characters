import React from 'react'

import SeriesTemplate from 'src/components/templates/series-template'
import SeriesCardList from 'src/components/organisms/series-card-list'
import SeriesHero from 'src/components/molecules/series-hero'

const SeriesPage = () => {
  return (
    <>
      <SeriesTemplate
        seriesHero={
          <SeriesHero
            heroName="Spider-man"
            image="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          />
        }
        seriesCardList={
          <SeriesCardList
            seriesArray={[
              {
                id: 0,
                title: 'dasaaaasdasdasdsdssaasddasasasdsdsdasdasdadasdasddasasdasdasdsd',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 2,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 3,
                title: 'asasdassdasd',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 4,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 5,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 6,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 7,
                title: 'Saaaaaaaas asd asd asd dasaaaasdasdasdsdssasd',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 8,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 9,
                title: 'asasdassdasd',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 10,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 11,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 12,
                title: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
            ]}
          />
        }
      />
    </>
  )
}

export default SeriesPage
