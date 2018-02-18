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
          ]
        }
      }
    });
    
    // I expect it to be in the iframe
    expect(preview.find('iframe').element.srcdoc).toContain("<input type=\"submit")
  });
})
