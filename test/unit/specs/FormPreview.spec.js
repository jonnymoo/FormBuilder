import Vue from 'vue'
import FormPreview from '@/components/FormPreview'
import {mount, shallow} from 'vue-test-utils'

describe('Given a FormPreviw', () => {
   test('I expect it have an iframe', () => {
    // Given a preview
    const preview = shallow(FormPreview);
    
    // I expect an iframe
    expect(preview.findAll('iframe').length).toEqual(1)
  });
})
