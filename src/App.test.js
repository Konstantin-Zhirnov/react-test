import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import Character from './Character'

configure({
  adapter: new Adapter()
})

describe('<App />', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('Компонент App должен отрендерить 2 персонажа на светлой стороне', () => {
    expect(wrapper.find(Character)).toHaveLength(2)
  })

  it('Компонент App должен отрендерить 3 персонажа на темной стороне', () => {
    wrapper.setProps({
      side: 'dark'
    })
    expect(wrapper.find(Character)).toHaveLength(3)
  })

})


// describe('<App />', () => {

//   it('Компонент App должен отрендерить 2 персонажа на светлой стороне', () => {

//     const wrapper = shallow(<App />)

//     expect(wrapper.find(Character)).toHaveLength(2)
//   })

//   it('Компонент App должен отрендерить 3 персонажа на темной стороне', () => {

//     const wrapper = shallow(<App side={'dark'} />)

//     expect(wrapper.find(Character)).toHaveLength(3)
//   })

// })