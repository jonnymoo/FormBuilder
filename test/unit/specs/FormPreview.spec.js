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
          ]
        }
      }
    });    
    // I expect an iframe
    expect(preview.findAll('iframe').length).toEqual(1)
  });

  test('When I have a form element I expect it to be in the iframe', () => {
    // Given a preview, when I have a form element
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              formElement: "MyElementStuff"
            }
          ]
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
          submitText: "Test Submit"
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
          fieldsJsonDefault: "test"
        }
      }
    });
    
    // when I set the json default
    preview.vm.setDefault();

    // I expect it to be copied to the fields json
    expect(preview.vm.fieldsJson).toEqual("test")
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
          fieldsJsonDefault: "test"
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson).toContain("return ( test )")
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
          fieldsJsonDefault: "test"
        }
      }
    });
    
    // I expect it to be copied to the fields json
    expect(preview.vm.methodsJson).toContain("return ( true )")
  });

  test('When I fields which are shown I expect them to have a row and column in the preview', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName",
              condition: "test",
              show: true
            }
          ]
        }
      }
    });
    
    preview.vm.readOnly = true
    // I expect it to be copied to the fields json
    expect(preview.vm.preview).toContain('<div class="row">')
    expect(preview.vm.preview).toContain('<div class="col-md-12">')

  });

  test('When I fields which are not shown I expect them to not have a row and column in the preview', () => {
    // Given a preview
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName",
              condition: "test",
              show: false
            }
          ]
        }
      }
    });
    
    preview.vm.readOnly = true
    // I expect it to be copied to the fields json
    expect(preview.vm.preview).not.toContain('<div class="row">')
    expect(preview.vm.preview).not.toContain('<div class="col-md-12">')

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
          ]
        }
      }
    });
    
    // when I set the form to readonly
    preview.vm.readOnly = true;

    // I don't expect the submit button
    expect(preview.vm.preview).not.toContain('v-on:click="submit"')
  });
})
