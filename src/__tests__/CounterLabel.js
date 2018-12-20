import React from 'react'
import CounterLabel from '../CounterLabel'
import {render} from '../utils/testing'
import {COMMON} from '../constants'

describe('CounterLabel', () => {
  it('renders a <span> with the "Counter" class', () => {
    expect(render(<CounterLabel />).type).toEqual('span')
    expect(render(<CounterLabel />).props.className).toContain('Counter')
  })

  it('has default theme', () => {
    expect(CounterLabel).toSetDefaultTheme()
  })

  it('respects the "scheme" prop', () => {
    expect(render(<CounterLabel scheme="gray" />).props.className).toContain('Counter--gray')
    expect(render(<CounterLabel scheme="gray-light" />).props.className).toContain('Counter--gray-light')
    // FIXME: should we test invalid values like this?
    // expect(renderClasses(<CounterLabel theme="red" />)).toEqual(['Counter', 'Counter--red'])
  })

  it('implements system props', () => {
    expect(CounterLabel).toImplementSystemProps(COMMON)
  })
})
