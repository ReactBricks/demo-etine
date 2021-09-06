import React from 'react'
import { Repeater, RichText, Text, types } from 'react-bricks'
import blockNames from '../blockNames'
import Container from '../components/Container'

const HeroUnit: types.Brick = () => {
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
        <Repeater
          propName="buttons"
          renderWrapper={(items) => (
            <div className="flex flex-wrap space-x-4">{items}</div>
          )}
        />
      </Container>
    </div>
  )
}

HeroUnit.schema = {
  name: blockNames.heroUnit,
  label: 'Hero Unit',
  getDefaultProps: () => ({
    title: 'Lorem Ipsum',
    paragraph: 'Lorem ipsum dolor sit amet'
  }),
  repeaterItems: [
    {
      name: 'buttons',
      itemType: blockNames.button,
      itemLabel: 'Button',
      min: 0,
      max: 4,
    },
  ],
}

export default HeroUnit
