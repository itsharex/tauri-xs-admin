import { BuildOptions } from 'vite';

export function createViteBuild(): BuildOptions {
  const viteBuild = {
    target: ['es2021', 'chrome100', 'safari13'],
    // don't minify for debug builds
    minify: (!process.env.TAURI_DEBUG ? 'esbuild' : false) as BuildOptions['minify'],
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    // 指定输出路径
    outDir: 'dist',
    // 指定生成静态资源的存放路径
    assetsDir: 'static',
    // 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在块加载时插入 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件。
    // 启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    brotliSize: false,
    // terserOptions: {
    //   compress: {
    //     keep_infinity: true,
    //     // Used to delete console in production environment
    //     drop_console: true,
    //   },
    // },
    // chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
  };
  return viteBuild;
}
