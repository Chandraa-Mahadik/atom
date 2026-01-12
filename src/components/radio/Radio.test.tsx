import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Radio, RadioLabel, RadioOption } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('renders radio options', () => {
    render(
      <RadioGroup>
        <RadioOption>
          <Radio value="a" id="a" />
          <RadioLabel htmlFor="a">A</RadioLabel>
        </RadioOption>
      </RadioGroup>
    );

    expect(screen.getByLabelText('A')).toBeInTheDocument();
  });

  it('allows selection', () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioOption>
          <Radio value="a" id="a" />
          <RadioLabel htmlFor="a">A</RadioLabel>
        </RadioOption>
        <RadioOption>
          <Radio value="b" id="b" />
          <RadioLabel htmlFor="b">B</RadioLabel>
        </RadioOption>
      </RadioGroup>
    );

    fireEvent.click(screen.getByLabelText('B'));
    expect(screen.getByLabelText('B')).toHaveAttribute(
      'data-state',
      'checked'
    );
  });
});
