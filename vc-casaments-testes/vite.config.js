// export default {
//     root: 'src',
//     build: {
//         outDir: '../dist'
//     }
// }

import { resolve } from 'path'
import { defineConfig } from "vite"

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    base: '/vc-casamets/vc-casaments-testes/dist/pages/home/',
     build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
        input: {
            main: resolve(root, 'index.html'),
            home: resolve(root, 'pages/home','index.html'),
        },
    },
  },
})