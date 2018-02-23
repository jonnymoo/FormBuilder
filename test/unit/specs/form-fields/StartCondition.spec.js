import Vue from 'vue'
import StartCondition from '@/components/form-fields/StartCondition'
import {mount, shallow} from 'vue-test-utils'

// TODO - Refactor monaco into its own component so it can be mocked

describe('Given a start condition', () => {
  test("I expect it to have a if template", () => {
    // Given a text area
    var formField = {}
    var editor = {
      fieldJsonDefault: "test"
    }

    const wrapper = shallow(StartCondition, {
      propsData: { formField, editor }
    })
   
    // I expect it to have a text area
    expect(formField.formElement).toContain('<template v-if');
  });

  
})
