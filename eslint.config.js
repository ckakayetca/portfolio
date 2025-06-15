import eslintConfigPrettier from 'eslint-config-prettier'
import Vue from 'eslint-plugin-vue'
import globals from 'globals'
import typescript from 'typescript-eslint'

export default [
    {
        ignores: ['{dist,public,node_modules}/**/*'],
    },
    eslintConfigPrettier,
    ...Vue.configs['flat/recommended'],
    {
        files: ['**/*.{ts,vue}'],
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
                ...typescript.globals,
            },
        },
        plugins: {
            vue: Vue,
            typescript: typescript,
        },
        rules: {
            'comma-dangle': ['warn', 'always-multiline'],
            'no-const-assign': 'error',
            'no-inner-declarations': 'off',
            'no-undef': 'error',
            'no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '^_', // Ignore variables starting with "_"
                    argsIgnorePattern: '^_', // Ignore function parameters starting with "_"
                },
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'any',
                    },
                },
            ],
            'vue/attributes-order': 'off',
            'vue/html-closing-bracket-newline': 'off',
            'vue/html-indent': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'vue/require-default-prop': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            quotes: ['warn', 'single', { avoidEscape: true }],
            semi: ['warn', 'never'],
        },
    },
]
