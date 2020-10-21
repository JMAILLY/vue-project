// data inutile
export const state = () => ({
  data: [
    {
      id: '1',
      permalink: 'product1',
      name: 'product1',
      desctiption: 'belles pompes',
      price: {
        raw: 1
      },
      quantity: 0,
      media: {
        type: 'image',
        source: 'https://unsplash.it/1200/900'
      },
      categories: [
        {
          id: 1,
          slug: 'shoes',
          name: 'Adidas'
        }
      ]
    },
    {
      id: '2',
      permalink: 'product2',
      name: 'product2',
      desctiption: 'pas belles pompes',
      price: {
        raw: 2
      },
      quantity: 0,
      media: {
        type: 'image',
        source: 'https://unsplash.it/1200/900'
      },
      categories: [
        {
          id: 1,
          slug: 'shoes',
          name: 'Adidas'
        },
        {
          id: 2,
          slug: 'tshirts',
          name: 'Adidos'
        }
      ]
    }
  ]
})

export const mutations = {

}
