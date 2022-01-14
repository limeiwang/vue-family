# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

``` json
{
    "editor.tabSize": 4,
    "editor.fontSize": 14,
    "files.autoSave": "onFocusChange",
    "terminal.integrated.tabs.enabled": false,
    "editor.detectIndentation": false, //关掉编辑器根据文件类型进行的检测
    "editor.renderControlCharacters": true, //制表符显示->
    "editor.renderWhitespace": "all", //空格显示...
    "editor.insertSpaces": true,
    "GitCommitPlugin.CustomCommitType":[
        {
            "label": "merge",
            "key": "merge",
            "detail": "合并&解决冲突",
            "icon":"🈴"
        },
    ],
    "git.autofetch": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": true,
    },
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript"
    ],
    "eslint.alwaysShowStatus": true,
    "stylelint.validate": [
      "css",
      "less",
      "postcss",
      "scss",
      "vue",
      "sass"
    ],
    "window.zoomLevel": 1,
}
```
