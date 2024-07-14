import type { Meta, StoryObj } from '@storybook/react';
import mailLogo from "../../assets/icon/mail.png"
import { Input } from '../../components/common/Input';
import '../../components/common/Input/style.ts';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'email',
    icon: "mailLogo",
    size: "small",
    placeholder: 'Email',
    isError: false,
    isTrue: false
  },
};
