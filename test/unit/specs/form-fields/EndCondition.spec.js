import Vue from 'vue'
import EndCondition from '@/components/form-fields/EndCondition'
import {mount, shallow} from 'vue-test-utils'

describe('Given a start condition', () => {
  test("I expect it to have an end template", () => {
    // Given a text area
    var formField = {}
    const wrapper = shallow(EndCondition, {
      propsData: { formField }
    })
   
    // I expect it to have a text area
    expect(formField.formElement).toContain('</template>');
  });

  
})
