import Vue from 'vue'
import TextInput from '@/components/form-fields/TextInput'
import {mount, shallow} from 'vue-test-utils'

describe('TextInput', () => {
 
    it('populates the label value', () => {
        var formField = {}
        const wrapper = shallow(TextInput, {
        propsData: { formField }
        })

        const input = wrapper.find("input");
        input.element.value = "test label";
        input.trigger("input");
        
        expect(formField.label).toEqual("test label");
    })

    test("when I enter a name I expect it to be html escaped", () => {
        // Given a text input
        var formField = {}
        const wrapper = shallow(TextInput, {
          propsData: { formField }
        })
            
        const input = wrapper.find("input");
        input.element.value = "test < label";
        input.trigger("input");
        
        expect(formField.formElement).toContain("test &lt; label");
    });
})
