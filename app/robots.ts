import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/about/", "/programs/", "/gallery/"],
        },
        sitemap: "https://westwoodarc.org/sitemap.xml",
    };
}
