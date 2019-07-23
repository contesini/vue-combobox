import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Painel from '@/components/Painel.vue';

describe('Painels.vue', () => {
  it('renders props.msg when passed', () => {
    const notificacao = 1
    const wrapper = shallowMount(Painel, {
      propsData: { notificacao },
    });
    expect(wrapper.text()).to.include(notificacao);
  });
});
