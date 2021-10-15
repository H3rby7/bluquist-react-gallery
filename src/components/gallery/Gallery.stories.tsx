import React from 'react';

import Gallery from './Gallery';

export default {
  component: Gallery,
  title: 'Gallery',
};

const Template = args => <Gallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  Gallery: {
    id: '1',
    title: 'Test Gallery',
    state: 'Gallery_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  Gallery: {
    ...Default.args.Gallery,
    state: 'Gallery_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  Gallery: {
    ...Default.args.Gallery,
    state: 'Gallery_ARCHIVED',
  },
};