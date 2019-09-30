import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'design-system-components',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'docs-readme'
        }
    ],
    plugins: [
        sass()
    ],
    globalStyle: 'src/global/global.scss',
    excludeSrc: ['**/.stories.']
};
