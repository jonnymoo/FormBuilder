import Vue from 'vue'
import FormPreview from '@/components/FormPreview'
import {mount, shallow} from 'vue-test-utils'

describe('Given a FormPreview', () => {
   test('I expect it have an iframe', () => {
    // Given a preview
    const preview = shallow(FormPreview);
    
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


  test('When I have named fields I expect them to appear in my default json', () => {
    // Given a preview, when I have named fields
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: "MyName"
            },
            {
              name: "MyName2"
            }
          ]
        }
      }
    });
    

    // I expect it to be in the default json
    expect(preview.vm.fieldsJsonDefault).toContain('"MyName": \'\'')
    expect(preview.vm.fieldsJsonDefault).toContain('"MyName2": \'\'')
  });

  test('When I have un-named fields I dont expect them to appear in my default json', () => {
    // Given a preview, when I have named fields
    const preview = shallow(FormPreview, {
      propsData: {
        editor: {
          formFields: [
            {
              name: null
            },
            {
              name: "MyName2"
            }
          ]
        }
      }
    });
    

    // I expect it to be in the default json
    expect(preview.vm.fieldsJsonDefault).not.toContain('"null": \'\'')
    expect(preview.vm.fieldsJsonDefault).toContain('"MyName2": \'\'')
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
          ]
        }
      }
    });
    
    // when I set the json default
    preview.vm.setDefault();

    // I expect it to be copied to the fields json
    expect(preview.vm.fieldsJson).toContain('"MyName": \'\'')
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
