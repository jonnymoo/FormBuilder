import HtmlEncode from '@/util/HtmlEncode'

describe('Given an input', () => {
  test('when it is undefined I expect a blank string', () => {
    expect(HtmlEncode()).toEqual('')
  });

  test('when it contains html element I expect them to be encoded', () => {
    expect(HtmlEncode('<mytest>')).toEqual('&lt;mytest&gt;')
  })
})