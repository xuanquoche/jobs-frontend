import type { Meta, StoryObj } from '@storybook/react';
import tickicon from '../../assets/icon/tickIcon.png';
import Tick from '../../components/common/TickList';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tick',
  component: Tick,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
} satisfies Meta<typeof Tick>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const primary: Story = {
  args: {
    text: 'Google',
    icon: tickicon,
    onClick: () => {
      alert(1)
    }
  },
};
