import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.less',
                'resources/css/colors.less',
                'resources/css/about-us.less',
                // 'resources/css/layout.less',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
});
