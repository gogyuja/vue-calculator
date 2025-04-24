import { fn } from '@storybook/test'
import Btn from '../components/Btn.vue'
import type { Meta, StoryFn, Preview, StoryObj } from '@storybook/vue3'

//스토리북 메타데이터 설정
// export default {
//   title: 'Components/Btn',
//   component: Btn,
//   tags: ['autodocs'],
// } as Meta<typeof Btn>

const meta: Meta = {
  title: 'Components/Btn',
  component: Btn,
  tags: ['autodocs'],
  argTypes: {
    class: { control: 'select', options: ['number', 'operator'] },
    style: { control: 'select', options: ['width:10rem; height:5rem', 'width:5rem; height:5rem;'] },
  },
  args: {},
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
// export const Default = Template.bind({})
// Default.args = {
//   label: '테스트버튼',
//   style: { width: '200px', height: '100px' },
//   class: 'operator',
// }

// 기존 Template 방식 대신 StoryObj 사용
export const Default: StoryObj<typeof meta> = {
  args: {
    label: '테스트버튼',
    style: { width: '200px', height: '100px' },
    class: 'operator',
  },
}

export const Number = {
  args: {
    class: 'number',
    label: '1',
    style: {
      width: '300px',
    },
  },
}

export const Operater = {
  args: {
    class: 'operator',
    label: '+',
  },
}
