import { fn } from '@storybook/test'
import Result from '../../components/Result.vue'
import type { Meta, StoryFn, Preview } from '@storybook/vue3'

//스토리북 메타데이터 설정
// export default {
//   title: 'Components/Btn',
//   component: Btn,
//   tags: ['autodocs'],
// } as Meta<typeof Btn>

const meta = {
  title: 'Result/Result',
  component: Result,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta

//템플릿 생성
const Template: StoryFn<typeof Result> = (args) => ({
  components: { Result },
  setup() {
    return { args }
  },
  template: `<Result/>`, // args 활용
})

//기본스토리
export const Default = Template.bind({})
Default.args = {}
