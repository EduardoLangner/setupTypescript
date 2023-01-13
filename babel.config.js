module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@modules': './src/modules',
                '@config': './src/config',
                '@shared': './src/shared',
                '@infra': './src/infra',
                '@core': './src/core'
            }
        }],
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}