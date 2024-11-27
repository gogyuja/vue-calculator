import type { toValue } from 'vue'
import Btn from '../components/Btn.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

//스토리북 메타데이터 설정
// export default {
//   title: 'Components/Btn',
//   component: Btn,
//   tags: ['autodocs'],
// } as Meta<typeof Btn>

const meta = {
  title: 'Components/Btn',
  component: Btn,
  tags: ['autodocs'],
  argTypes: {
    class: { control: 'select', options: ['number', 'operator'] },
    style: { control: 'select', options: ['width:10rem; height:5rem', 'width:5rem; height:5rem;'] },
  },
  args: {
  },
} satisfies Meta<typeof Btn>

export default meta

//템플릿 생성
const Template: StoryFn<typeof Btn> = (args) => ({
  components: { Btn },
  setup() {
    return { args }
  },
  template: `<Btn v-bind="args" />`, // args 활용
})

//기본스토리
export const Default = Template.bind({})
Default.args = {

}

export const Number = {
  args: {
    class: 'number',
    button: {
      label: '1',
      class: 'number',
      style: {
        width: '10rem',
      },
    },
  },
}

export const Operater = {
  args: {
    button: {
      class: 'operator',
      label:'+'
    },
  },
}
