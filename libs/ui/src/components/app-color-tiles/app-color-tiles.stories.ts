import { withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|App Color Tiles', module)
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
                <!-- Introduces Searching Capabilities to any Story -->
                <sb-search-bar target="sb-app-color-tiles"></sb-search-bar>
                <sb-app-color-tiles></sb-app-color-tiles>
            </sb-container>
        `
    }))
    .add('Pattern', () => ({
        template: `
            <sb-container>
                <!-- Introduces Searching Capabilities to any Story -->
                <sb-search-bar target="sb-app-color-tiles"></sb-search-bar>
                <sb-app-color-tiles pattern="^--ion"></sb-app-color-tiles>
            </sb-container>
        `
    }));
