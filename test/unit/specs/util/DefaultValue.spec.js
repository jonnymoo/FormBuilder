import defaultValue from '@/util/DefaultValue'

describe('Given a val', () => {
  test('when it is empty I expect a default back', () => {
    expect(defaultValue(undefined, 'default')).toEqual('default')
    expect(defaultValue('', 'default')).toEqual('default')
  });

  test('when it contains a value I expect the value back', () => {
    expect(defaultValue('value', 'default')).toEqual('value')
  })
})