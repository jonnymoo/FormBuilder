import Vue from 'vue'
import FieldProperties from '@/components/FieldProperties'
import {mount, shallow} from 'vue-test-utils'

describe('Given field properties', () => {
  
  test("when form fields are passed they are added to the form", () => {
    // Given a field properties
    const fieldProperties = shallow(FieldProperties, {
      "propsData": {
        formFields: [
          {
            type: 'TextInput',
            selected: true
          },
          {
            type: 'TextArea',
            selected: true
          },
          {
            type: 'MarkDown',
            selected: true
          }
        ]
      }
    });
    
    // When the addtext input is clicked
    expect(fieldProperties.findAll('div > div').length).toEqual(3)
  });
})