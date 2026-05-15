// Astro 配置文件：集中声明构建工具和集成相关设置。
// 当前项目暂未启用额外 integration，仅对 Vite SSR 外部依赖做显式配置。
import { defineConfig } from 'astro/config';

export default defineConfig({
  // integrations 为空表示当前不额外接入 Tailwind、MDX 等 Astro 集成。
  integrations: [],
  vite: {
    ssr: {
      // 将 svgo 标记为 SSR 外部依赖，避免服务端打包阶段错误内联该包。
      external: ['svgo']
    }
  }
});
