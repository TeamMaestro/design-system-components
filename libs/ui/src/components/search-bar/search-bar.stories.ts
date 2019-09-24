import { withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Search Bar', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <sb-container>
                <sb-search-bar target="ul"></sb-search-bar>

                <ul>
                    <li>Red</li>
                    <li>Blue</li>
                    <li>Orange</li>
                    <li>Green</li>
                    <li>Yellow</li>
                    <li>Purple</li>
                    <li>Black</li>
                </ul>
            </sb-container>
        `
    }))
