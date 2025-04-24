import { fn } from '@storybook/test'
import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'

import Input from '../../components/Input.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Result/Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  },
} satisfies Meta<typeof Input>

export default meta
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

//템플릿 생성
const Template: StoryFn<typeof Input> = (args) => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: `<Result/>`, // args 활용
})

//기본스토리
export const Default = Template.bind({})
Default.args = {}
