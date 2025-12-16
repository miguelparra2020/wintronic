// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://wintronic.com", // Change this to your production URL.
	description:
		"Wintronic es una empresa dedicada a la impresión 3D y al diseño personalizado, donde transformamos ideas en piezas únicas y funcionales. Creamos soluciones a medida con tecnología de alta precisión, enfocadas en calidad, innovación y detalle para cada proyecto.",
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "Fotografía del inicio de la web", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Wintronic", // Change this to your website's name,
	twitter: {
		card: "Wintronic es una empresa dedicada a la impresión 3D y al diseño personalizado, donde transformamos ideas en piezas únicas y funcionales. Creamos soluciones a medida con tecnología de alta precisión, enfocadas en calidad, innovación y detalle para cada proyecto."
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Wintronic", // Change this to your website's name.
	short_name: "Wintronic", // Change this to your website's short name.
	description:
		"Wintronic es una empresa dedicada a la impresión 3D y al diseño personalizado, donde transformamos ideas en piezas únicas y funcionales. Creamos soluciones a medida con tecnología de alta precisión, enfocadas en calidad, innovación y detalle para cada proyecto.", // Change this to be your website's description.
	 // Change this to your websites description.
	theme_color: "#ffffffff", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}


