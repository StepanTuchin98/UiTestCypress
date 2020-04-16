import ButtonWrapper from '/Users/stuchin/react-todo-app/src/components/ui/ButtonWrapper.js'
import React from '/Users/stuchin/react-todo-app/node_modules/react/dist/react.js'
import {MODE_NONE, MODE_CREATE, MODE_SEARCH} from '/Users/stuchin/react-todo-app/src/services/mode.js';
import { getAll, addToList } from '/Users/stuchin/react-todo-app/src/services/todo.js'

describe('cypress-react-unit-test', () => {
it('check first options', () => {
  expect(getAll()).to.eql([
      {
          id: 1,
          text: 'Learn Javascript',
          completed: false
      },
      {
          id: 2,
          text: 'Learn React',
          completed: false
      },
      {
          id: 3,
          text: 'Build a React App',
          completed: false
      }
  ])
})
})

describe('cypress-react-unit-test', () => {
it('check add to list', () => {
  expect(addToList([{
      id: 1,
      text: 'Apple',
  },
  {
      id: 2,
      text: 'Banana',
  }], 'b')).to.eql([
      {
          id: 1,
          text: 'Apple',
      },
      {
          id: 2,
          text: 'Banana',
      },
      {
        0: "b", id: 4
      }
  ])
})
})
