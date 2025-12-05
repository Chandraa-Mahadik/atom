#!/bin/bash

# Usage: ./component.sh create button

NAME=$2
FOLDER="src/components/$NAME"

# convert to PascalCase (button -> Button, card-box -> CardBox)
PASCAL=$(echo "$NAME" | sed -r 's/(^|-)(\w)/\U\2/g')

if [ "$1" != "create" ] || [ -z "$NAME" ]; then
  echo "Usage: ./component.sh create <component-name>"
  exit 1
fi

# Create folder
mkdir -p "$FOLDER"

# Create files
echo "import * as React from 'react'

export interface ${PASCAL}Props {}

export const ${PASCAL}: React.FC<${PASCAL}Props> = ({}) => {
  return <div>${PASCAL} works!</div>
}
" > "$FOLDER/$PASCAL.tsx"

echo "import type { Meta, StoryObj } from '@storybook/react'
import { ${PASCAL} } from './${PASCAL}'

const meta: Meta<typeof ${PASCAL}> = {
  title: 'Components/${PASCAL}',
  component: ${PASCAL},
}
export default meta
export const Basic: StoryObj = { args: {} }
" > "$FOLDER/$PASCAL.stories.tsx"

echo "import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ${PASCAL} } from './${PASCAL}'

describe('${PASCAL}', () => {
  it('renders', () => {
    render(<${PASCAL} />)
    expect(screen.getByText('${PASCAL} works!')).toBeInTheDocument()
  })
})
" > "$FOLDER/$PASCAL.test.tsx"

echo "export * from './${PASCAL}'" > "$FOLDER/index.ts"

echo "✅ Created component: $PASCAL in $FOLDER"
