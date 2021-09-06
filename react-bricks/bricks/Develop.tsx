import React from 'react'
import { Repeater, RichText, Text, types } from 'react-bricks'
import blockNames from '../blockNames'
import Container from '../components/Container'

const Develop: types.Brick = () => {
  return (
    <Container>
      <RichText
        propName="Title"
        placeholder="Title"
        renderBlock={(props) => (
          <h1 className="text-4xl sm:text-5xl mb-4 text-secondary">{props.children}</h1>
        )}
        allowedFeatures={[types.RichTextFeatures.Bold]}
        renderBold={(props) => <span className="font-bold">{props.children}</span>}
      />
      <Text
        propName="paragraph"
        placeholder="Paragraph"
        renderBlock={(props) => <p className="text-secondary md:w-1/2">{props.children}</p>}
      />
      <div className="mt-8">
        <Repeater propName="textImage" />
      </div>
    </Container>
  )
}

Develop.schema = {
  name: blockNames.develop,
  label: 'Develop',
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: 'textImage',
      itemType: blockNames.textImage,
      itemLabel: 'Text Image',
      min: 0,
      max: 10,
    },
  ],
}

export default Develop
