import type { Meta, StoryObj } from "@storybook/react";
import Image1 from "../../assets/images/bird.png"

import { Card } from "../../components/common/Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    image: Image1,
    title: "Fleet - Travel shopping UI design kit",
    rating: 4.5,
    price: 120,
    onClick: () => {
      alert(1);
    }
  },
};
