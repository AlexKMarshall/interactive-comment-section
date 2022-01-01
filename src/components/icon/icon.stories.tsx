import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon, iconKeys } from 'src/components'

const meta: ComponentMeta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: iconKeys,
      control: { type: 'select' },
    },
  },
}

export default meta

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'Plus',
}
