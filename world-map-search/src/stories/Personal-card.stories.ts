// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PersonalCardComponent } from 'src/app/personal-card/personal-card.component';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/PersonalCard',
  component: PersonalCardComponent,
  
  
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<PersonalCardComponent> = (args: PersonalCardComponent) => ({
  props: args,
});

export const title = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
title.args = {
  title : "Pedro Diogo"
};

export const role=  Template.bind({});
role.args = {
  role : "Backend Developer"
};



