import Vue from 'vue'
import FieldsEditor from '@/components/FieldsEditor'
import {mount, shallow} from 'vue-test-utils'

describe('Given a FieldsEditor', () => {
   test('When I delete from the list I expect it to be removed', () => {
    // Given a fields editor
    var form = {
      formFields: [
        {
          key: 1
        },
        {
          key: 2
        },
        {
          key: 3
        }
      ]
    }

    const fieldsEditor = shallow(FieldsEditor, {
      "propsData": {
        editor: form,
        form: form
      }
    });

    // When I delete an item
    fieldsEditor.vm.deleteItem(1);
    
    // I expect it to be removed
    expect(fieldsEditor.vm.editor.formFields.length).toEqual(2);
    expect(fieldsEditor.vm.editor.formFields[0].key).toEqual(1);
    expect(fieldsEditor.vm.editor.formFields[1].key).toEqual(3);
  });

  test('When I move an item up I expect it to be moved', () => {
    // Given a fields editor
    var form = {
      formFields: [
        {
          key: 1
        },
        {
          key: 2
        },
        {
          key: 3
        }
      ]
    }

    const fieldsEditor = shallow(FieldsEditor, {
      "propsData": {
        editor: form,
        form: form
      }
    });

    // When I move an item
    fieldsEditor.vm.moveUp(1);
    
    // I expect it to be moved
    expect(fieldsEditor.vm.editor.formFields.length).toEqual(3);
    expect(fieldsEditor.vm.editor.formFields[0].key).toEqual(2);
    expect(fieldsEditor.vm.editor.formFields[1].key).toEqual(1);
    expect(fieldsEditor.vm.editor.formFields[2].key).toEqual(3);
  });

  test('When I move and item down I expect it to be moved', () => {
    // Given a fields editor
    var form = {
      formFields: [
        {
          key: 1
        },
        {
          key: 2
        },
        {
          key: 3
        }
      ]
    }

    const fieldsEditor = shallow(FieldsEditor, {
      "propsData": {
        editor: form,
        form: form
      }
    });

    // When I move an item
    fieldsEditor.vm.moveDown(1);
    
    // I expect it to be moved
    expect(fieldsEditor.vm.editor.formFields.length).toEqual(3);
    expect(fieldsEditor.vm.editor.formFields[0].key).toEqual(1);
    expect(fieldsEditor.vm.editor.formFields[1].key).toEqual(3);
    expect(fieldsEditor.vm.editor.formFields[2].key).toEqual(2);
  });
})
