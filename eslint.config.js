import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import Vue from 'eslint-plugin-vue'
import globals from 'globals'
import vueEslintParser from 'vue-eslint-parser'

export default [
    {
        ignores: ['{dist,public,node_modules}/**/*'],
    },
    eslintConfigPrettier,
    ...Vue.configs['flat/recommended'],
    {
        files: ['**/*.{ts,js,vue}'],
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                parser: typescriptEslintParser,
            },
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            vue: Vue,
        },
        rules: {
            'comma-dangle': 'off',
            'no-inner-declarations': 'off',
            'no-undef': 'error',
            'no-unused-vars': 'error',
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
