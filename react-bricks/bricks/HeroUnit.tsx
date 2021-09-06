import React from 'react'
import { Repeater, RichText, Text, types } from 'react-bricks'
import blockNames from '../blockNames'
import Container from '../components/Container'

const Banner: types.Brick = () => {
  return (
    <div className="bg-default bg-cover bg-no-repeat bg-center">
      <Container className="text-white">
        <RichText
          propName="title"
          placeholder="Title"
          renderBlock={(props) => (
            <h1 className="text-4xl sm:text-5xl leading-tight">
              {props.children}
            </h1>
          )}
          allowedFeatures={[types.RichTextFeatures.Bold]}
          renderBold={(props) => (
            <span className="font-bold">{props.children}</span>
          )}
        />
        <Text
          propName="paragraph"
          placeholder="Paragraph"
          renderBlock={(props) => (
            <p className="text-xl mt-5 block max-w-4xl font-medium">
              {props.children}
            </p>
          )}
        />
        <Repeater propName="buttons" />
      </Container>
    </div>
  )
}

Banner.schema = {
  name: blockNames.heroUnit,
  label: 'Hero Unit',
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: 'buttons',
      itemType: blockNames.button,
      itemLabel: 'Button',
      min: 0,
      max: 10,
    },
  ],
}

export default Banner
