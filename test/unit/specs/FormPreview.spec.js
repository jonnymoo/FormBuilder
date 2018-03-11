import Vue from 'vue'
import FormPreview from '@/components/FormPreview'
import {mount, shallow} from 'vue-test-utils'

describe('Given a FormPreview', () => {
   test('I expect it have an iframe', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              formElement: "MyElementStuff"
            }
          ],
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });    
    // I expect an iframe
    expect(preview.findAll('iframe').length).toEqual(1)
  });

  test('When I have a form html I expect it to be in the iframe', () => {
    // Given a preview, when I have a form element
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [],
          formHtml: () => { return "MyElementStuff"},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect it to be in the iframe
    expect(preview.find('iframe').element.srcdoc).toContain("MyElementStuff")
  });

  test('When I have a form element I expect a submit button to be in the iframe', () => {
    // Given a preview, when I have a form element
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              formElement: "MyElementStuff"
            }
            
          ],
          submitText: "Test Submit",
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect it to be in the iframe
    expect(preview.find('iframe').element.srcdoc).toContain('<input type="submit"')
    expect(preview.find('iframe').element.srcdoc).toContain('Test Submit')
  });

  test('When I set form json default I expect it to be copied to the fields json', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName"
            }
          ],
          fieldsJson: () => {return '"test": "test"'},
          formHtml: () => {}
        }
      }
    });
    
    // when I set the json default
    preview.vm.setDefault();

    // I expect it to be copied to the fields json
    expect(preview.vm.fieldsJson).toContain("test")
  });

  test('When I have fields with conditions I expect them in my methods json', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName",
              condition: "test"
            },
            {
              name: "MyName2",
              condition: "test2"
            }

          ],
          fieldsJsonDefault: "test",
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson()[0]).toContain("return ( test )")
  });

  test('When I have fields with blank conditions I expect them in my methods json as return true', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName",
              condition: "test"
            },
            {
              name: "MyName2",
              condition: ""
            }

          ],
          fieldsJsonDefault: "test",
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect one of my conditions to return true
    expect(preview.vm.methodsJson()[0]).toContain("return ( test )")
    expect(preview.vm.methodsJson()[1]).toContain("return ( true )")
  });

  test('When I have sub fields with conditions I expect them in my methods json', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName",
              condition: "test",
              formFields: [
                {
                  name: "MyName2",
                  condition: "test2"
                }
              ]
            }
          ],
          fieldsJsonDefault: "test",
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson()[1]).toContain("return ( test2 )")
  });

  test('When I have sub fields with no name with conditions I expect the model to be passed through as FormFields', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "",
              condition: "test",
              formFields: [
                {
                  name: "MyName2",
                  condition: "test2"
                }
              ]
            }
          ],
          fieldsJsonDefault: "test",
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson()[1]).toContain("function (fields, FormFields)")
  });

  test('When I have a field with an add button I expect the add function in my methods', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              key: "abc",
              name: "",
              condition: "",
              addButtonText: "add"
            }
          ],
          fieldsJsonDefault: "test",
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson()[1]).toContain("Add_abc")
  });

  test('When I have a field with an add button I expect the add function to default the item fields', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              key: "abc",
              name: "",
              condition: "",
              addButtonText: "add",
              formFields: [
                {
                  name: "testField",
                  jsonDefault: '"testField": ""'
                }
              ]
            }
          ],
          fieldsJsonDefault: "test",
          formHtml: () => {},
          fieldsJson: (formFields) => { return formFields[0].jsonDefault}
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson()[1]).toContain("Add_abc")
    expect(preview.vm.methodsJson()[1]).toContain("var item = ")
    expect(preview.vm.methodsJson()[1]).toContain('"testField": ""')

  });

  test('When I have a field with an remove button I expect the remove function in my methods', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              key: "abc",
              name: "",
              condition: "",
              removeButtonText: "remove"
            }
          ],
          fieldsJsonDefault: "test",
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson()[1]).toContain("Remove_abc")
  });


  test('When I set the form to readonly I expect no submit button', () => {
    // Given a preview 
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName"
            }
          ],
          formHtml: () => {},
          fieldsJson: () => {}
        }
      }
    });
    
    // when I set the form to readonly
    preview.vm.readOnly = true;

    // I don't expect the submit button
    expect(preview.vm.preview).not.toContain('v-on:click="submit"')
  });
})
