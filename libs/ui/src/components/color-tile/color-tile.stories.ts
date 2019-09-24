import { withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Design System|Color Tile', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Example', () => ({
        template: `
            <sb-container>
                <sb-color-tile hex="#6E00FF"></sb-color-tile>
                <sb-color-tile hex="#FF5630"></sb-color-tile>
                <sb-color-tile hex="#00B8D9"></sb-color-tile>
                <sb-color-tile hex="#FFAB02"></sb-color-tile>
                <sb-color-tile hex="#36B37E"></sb-color-tile>
            </sb-container>
        `
    }))
    .add('Hex', () => ({
        template: `
            <sb-color-tile hex="222731"></sb-color-tile>
        `
    }))
    .add('RGB', () => ({
        template: `
            <sb-color-tile rgb="34, 39, 49"></sb-color-tile>
        `
    }))
    .add('HSL', () => ({
        template: `
            <sb-color-tile hsl="220,18%,16%"></sb-color-tile>
        `
    }))
    .add('CSS Variable', () => ({
        template: `
            <sb-color-tile variable="--color-charcoal"></sb-color-tile>
        `
    }));
