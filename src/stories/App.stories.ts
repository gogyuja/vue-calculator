import { fn } from '@storybook/test'
import App from '../App.vue'
import type { Meta, StoryFn, Preview } from '@storybook/vue3'

//스토리북 메타데이터 설정
// export default {
//   title: 'Components/Btn',
//   component: Btn,
//   tags: ['autodocs'],
// } as Meta<typeof Btn>

const meta: Meta = {
  title: 'Components/App',
  component: App,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: fn(),
  },
}

export default meta

//템플릿 생성
const Template = (args: any) => ({
  components: { App },
  setup() {
    return { args }
  },
  template: `<App/>`, // args 활용
})

//기본스토리
export const Default = Template.bind({})
