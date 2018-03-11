import monaco from '@/components/monaco'

describe('Given a monaco help', () => {
  test('when I add the fields variable I expect it to be added to the monaco javascript defaults', () => {
    
    // Mock out monaco on the window
    var addExtraLibParams = {
      json: '',
      fileName: ''
    }

    window.monaco = {
      languages: {
        typescript: {
          javascriptDefaults: {
            addExtraLib: ( x, y ) => {
              addExtraLibParams.json = x
              addExtraLibParams.fileName = y
            }
          }
        }
      }
    }
    monaco.addFieldsVar("test", "model", "test2")

    expect(addExtraLibParams.json).toContain("var fields = test")
    expect(addExtraLibParams.json).toContain("var model = test2")
    expect(addExtraLibParams.fileName).toEqual("filename/fields.d.ts")

  });

  test('when I re-add the fields variable I expect the old one to be disposed', () => {
    
    var disposeCalled = false
    // Mock out manaco on the window
    

    window.monaco = {
      languages: {
        typescript: {
          javascriptDefaults: {
            addExtraLib: ( ) => {
              return {
                dispose: () => {
                  disposeCalled = true
                }
              }
            }
          }
        }
      }
    }
    monaco.addFieldsVar("test")
    expect(disposeCalled).toEqual(false)
    monaco.addFieldsVar("test")
    expect(disposeCalled).toEqual(true)

  });
})