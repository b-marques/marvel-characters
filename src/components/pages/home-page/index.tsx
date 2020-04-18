import React from 'react'

import SearchBar from 'src/components/molecules/search-bar'
import HomeTemplate from 'src/components/templates/home-template'
import CharacterCardList from 'src/components/organisms/character-card-list'

const HomePage = () => {
  const search = (character: string) => {
    console.log(character)
  }

  return (
    <>
      <SearchBar search={search} />
      <HomeTemplate
        charactersCardList={
          <CharacterCardList
            characters={[
              {
                id: 0,
                name: 'dasaaaasdasdasdsdssasd',
                image: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
              },
              {
                id: 2,
                name: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 3,
                name: 'asasdassdasd',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 4,
                name: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 5,
                name: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 6,
                name: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 7,
                name: 'Saaaaaaaas asd asd asd dasaaaasdasdasdsdssasd',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 8,
                name: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 9,
                name: 'asasdassdasd',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 10,
                name: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 11,
                name: 'Wolverine',
                image:
                  'https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg',
              },
              {
                id: 12,
                name: 'Wolverine',
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

export default HomePage
