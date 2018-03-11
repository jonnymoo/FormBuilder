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
            selected: false,
            formFields: null
          },
          {
            type: 'TextArea',
            selected: false,
            formFields: null
          },
          {
            type: 'MarkDown',
            selected: false,
            formFields: null
          }
        ]
      }
    });
    
    // When the addtext input is clicked
    expect(fieldProperties.findAll('div.fieldProperty').length).toEqual(3)
  });

  test("when form fields with sub form fields are passed they are added to the form", () => {
    // Given a field properties
    const fieldProperties = shallow(FieldProperties, {
      "propsData": {
        editor: {
          fieldsJson: () => {}
        },
        formFields: [
          {
            type: 'TextInput',
            selected: false,
            formFields: [
              {
                type: 'TextInput',
                selected: false,
                formFields: null
              }
            ]
          },
          {
            type: 'TextArea',
            selected: false,
            formFields: null
          },
          {
            type: 'MarkDown',
            selected: false,
            formFields: null
          }
        ]
      }
    });
    
    // When the addtext input is clicked
    expect(fieldProperties.findAll('div.fieldProperty').length).toEqual(4)
  });
})