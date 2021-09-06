import React from 'react'
import { Link, types } from 'react-bricks'
import blockNames from '../blockNames'

interface ButtonProps {
  href: string
  text: string
}

const Button: types.Brick<ButtonProps> = ({ href, text, ...rest }) => {
  return (
    <Link
      href={href}
      className="btn bg-secondary mt-4 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out font-semibold"
      {...rest}
    >
      {text}
    </Link>
  )
}

Button.schema = {
  name: blockNames.button,
  label: 'Button',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    text: 'Button',
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Button text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'href',
      label: 'Link (external or path)',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Button
