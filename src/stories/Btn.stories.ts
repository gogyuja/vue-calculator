import type { toValue } from 'vue'
import Btn from '../components/Btn.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

//스토리북 메타데이터 설정
export default {
  title: 'Components/Btn',
  component: Btn,
  tags: ['autodocs'],
} as Meta<typeof Btn>

//템플릿 생성
const Template: StoryFn<typeof Btn> = (args) => ({
  components: { Btn },
  setup() {
    return { args }
  },
  template: `<Btn v-bind="args">
        <template v-if="args.default">{{ args.default }}</template>
  </Btn>`,
})

//기본스토리
export const Default = Template.bind({})
Default.args = {
  button: {
    class: 'number',
    style: { height: '5rem', width: '10rem' },
  },
  default: 'Default Button Text', // Slot 기본 내용
}

export const Number = {
  args: {
    button: {
      class: 'number',
      style: {
        height: '5rem',
        width: '10rem',
      },
    },
    default: '1',
  },
}

export const Operater = {
  args: {
    class: 'operator',
    height: '10rem',
  },
  template: '<Btn/>',
}
