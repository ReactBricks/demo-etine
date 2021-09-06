import React from 'react'
import { Image, Link, Text, types } from 'react-bricks'
import clsx from 'clsx'
import blockNames from '../blockNames'

interface TextImageProps {
  href: string
  buttonText: string
  side: string
}

const TextImage: types.Brick<TextImageProps> = ({
  side,
  href,
  buttonText,
  ...rest
}) => {
  return (
    <article {...rest}>
      <div
        className={clsx(
          'flex flex-col-reverse  mb-4',
          side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
        )}
      >
        <div className="w-full md:w-1/2 bg-tertiary p-10 text-secondary">
          <Text
            propName="title"
            placeholder="Title"
            renderBlock={(props) => (
              <h3 className="font-bold text-2xl mb-2">{props.children}</h3>
            )}
          />
          <Text
            propName="text"
            placeholder="Text"
            renderBlock={(props) => <p className="mb-10">{props.children}</p>}
          />
          <Link
            href={href}
            className="bg-primary text-white font-bold py-2 px-4 rounded"
          >
            {buttonText}
          </Link>
        </div>
        <div className="w-full md:w-1/2 bg-center bg-no-repeat bg-cover h-58 md:h-auto">
          <Image
            propName="image"
            alt=""
            imageClassName="h-64 object-cover w-full"
          />
        </div>
      </div>
    </article>
  )
}

TextImage.schema = {
  name: blockNames.textImage,
  label: 'Text Image',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    side: 'right',
  }),
  sideEditProps: [
    {
      name: 'side',
      label: 'Side?',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'right', label: 'Right' },
          { value: 'left', label: 'Left' },
        ],
      },
    },
    {
      name: 'buttonText',
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

export default TextImage
