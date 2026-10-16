// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false, // GitHub Pages chỉ hỗ trợ static SPA
    // 👉 quan trọng: base đúng repo name
    app: {
        baseURL: "/thiep-cuoi-online/",
        buildAssetsDir: "assets",
    },

    nitro: {
        preset: "github-pages",
    },

    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            htmlAttrs: { lang: "vi" },
            title: "Mộc Thiệp — Thiệp cưới online tinh tế",
            meta: [
                {
                    name: "description",
                    content:
                        "Tự tạo thiệp cưới online thật đẹp trong vài phút. Dễ dàng chia sẻ qua Zalo, Messenger.",
                },
                { name: "theme-color", content: "#fff9f7" },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap",
                    rel: "stylesheet",
                },
            ],
        },
    },
});
