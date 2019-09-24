import { centered } from '@storybook/addon-centered/angular';
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

// @ts-ignore
import readme from './readme.md';

storiesOf('Typography|Label', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addParameters({
        notes: {
            markdown: readme
        }
    })
    .add('Default', () => ({
        template: `
            <div class="docs-example">
                <launch-ui-label
                    [color]="color"
                    [capitalize]="capitalize"
                    [lowercase]="lowercase"
                    [uppercase]="uppercase"
                    [maxLines]="maxLines"
                    [heading]="heading" xs>{{text}}</launch-ui-label>
                <launch-ui-label
                    [color]="color"
                    [capitalize]="capitalize"
                    [lowercase]="lowercase"
                    [uppercase]="uppercase"
                    [maxLines]="maxLines"
                    [heading]="heading" sm>{{text}}</launch-ui-label>
                <launch-ui-label
                    [color]="color"
                    [capitalize]="capitalize"
                    [lowercase]="lowercase"
                    [uppercase]="uppercase"
                    [maxLines]="maxLines"
                    [heading]="heading">{{text}}</launch-ui-label>
                <launch-ui-label
                    [color]="color"
                    [capitalize]="capitalize"
                    [lowercase]="lowercase"
                    [uppercase]="uppercase"
                    [maxLines]="maxLines"
                    [heading]="heading" lg>{{text}}</launch-ui-label>
                <launch-ui-label
                    [color]="color"
                    [capitalize]="capitalize"
                    [lowercase]="lowercase"
                    [uppercase]="uppercase"
                    [maxLines]="maxLines"
                    [heading]="heading" xl>{{text}}</launch-ui-label>
                <launch-ui-label
                    [color]="color"
                    [capitalize]="capitalize"
                    [lowercase]="lowercase"
                    [uppercase]="uppercase"
                    [maxLines]="maxLines"
                    [heading]="heading" xxl>{{text}}</launch-ui-label>
            </div>
        `,
        props: {
            text: text('text', 'The quick brown fox jumps over the lazy dog.'),
            color: select('color', [
                'primary',
                'secondary',
                'success',
                'warning',
                'danger',
                'dark',
                'light',
                'white',
                'black'
            ], 'black'),
            capitalize: boolean('capitalize', false),
            lowercase: boolean('lowercase', false),
            uppercase: boolean('uppercase', false),
            heading: boolean('heading', false),
            maxLines: number('maxLines', 1)
        }
    }))
    .add('Heading', () => ({
        template: `
            <div class="docs-example">
                <launch-ui-label [color]="color" heading xs>The quick brown fox jumps over the lazy dog.</launch-ui-label>
                <launch-ui-label [color]="color" heading sm>The quick brown fox jumps over the lazy dog.</launch-ui-label>
                <launch-ui-label [color]="color" heading>The quick brown fox jumps over the lazy dog.</launch-ui-label>
                <launch-ui-label [color]="color" heading lg>The quick brown fox jumps over the lazy dog.</launch-ui-label>
                <launch-ui-label [color]="color" heading xl>The quick brown fox jumps over the lazy dog.</launch-ui-label>
                <launch-ui-label [color]="color" heading xxl>The quick brown fox jumps over the lazy dog.</launch-ui-label>
            </div>
        `,
        props: {
            color: select('color', [
                'primary',
                'secondary',
                'success',
                'warning',
                'danger',
                'dark',
                'light',
                'white',
                'black'
            ], 'black')
        }
    }))
    .add('Colors', () => ({
        template: `
            <launch-ui-label color="primary">The quick brown fox jumps over the lazy dog.</launch-ui-label>
            <launch-ui-label color="secondary">The quick brown fox jumps over the lazy dog.</launch-ui-label>
            <launch-ui-label color="success">The quick brown fox jumps over the lazy dog.</launch-ui-label>
            <launch-ui-label color="warning">The quick brown fox jumps over the lazy dog.</launch-ui-label>
            <launch-ui-label color="danger">The quick brown fox jumps over the lazy dog.</launch-ui-label>
            <launch-ui-label color="dark">The quick brown fox jumps over the lazy dog.</launch-ui-label>
            <launch-ui-label color="light">The quick brown fox jumps over the lazy dog.</launch-ui-label>
        `
    }))
    .add('Capitalize', () => ({
        template: `
            <launch-ui-label capitalize>The quick brown fox jumps over the lazy dog.</launch-ui-label>
        `
    }))
    .add('Uppercase', () => ({
        template: `
            <launch-ui-label uppercase>The quick brown fox jumps over the lazy dog.</launch-ui-label>
        `
    }))
    .add('Lowercase', () => ({
        template: `
            <launch-ui-label lowercase>The quick brown fox jumps over the lazy dog.</launch-ui-label>
        `
    }));
