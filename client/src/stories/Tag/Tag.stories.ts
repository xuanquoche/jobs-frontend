import type { Meta, StoryObj } from '@storybook/react';
import Google from '../../assets/icon/google.png';
import { Tag } from '../../components/common/Tag';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tag',
  component: Tag,
  tags: ['autodocs'],

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Goole: Story = {
  args: {
    text: 'Google',
    icon: Google
  },
};
