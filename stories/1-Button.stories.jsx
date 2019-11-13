import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
// import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.js
export default {
  title: 'Button',
};

storiesOf('button', module)
  .add('Accessible', () => <button type="button">Accessible button</button>)
  .add('Inaccessible', () => (
    // eslint-disable-next-line react/button-has-type
    <button style={{ backgroundColor: 'red', color: 'darkRed' }}>Inaccessible button</button>
  ))
  .add('deMo button', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('deMo Emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
