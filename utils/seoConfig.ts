// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://laferiadelaseo.com", // Change this to your production URL.
	description:
		"En La Feria del Aseo somos especialistas en la venta de productos y elementos de aseo diseñados para garantizar espacios limpios, seguros y agradables. Ofrecemos una amplia variedad de soluciones para el hogar, oficinas, negocios y empresas, siempre con productos de alta calidad y precios competitivos. Nuestra misión es ayudarte a mantener un entorno impecable con artículos confiables, prácticos y duraderos. Desde insumos básicos hasta productos especializados, contamos con un catálogo completo que se adapta a las necesidades de cada cliente. En La Feria del Aseo, la limpieza no es solo una tarea… es nuestra pasión. Y trabajamos cada día para que tengas acceso a los mejores productos, de manera fácil, rápida y con un servicio al cliente que te hará sentir en casa.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "Fotografía del inicio de la web", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "La feria del aseo", // Change this to your website's name,
	twitter: {
		card: "Descripción de la actividad de la compañía"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "La feria del aseo", // Change this to your website's name.
	short_name: "La feria del aseo", // Change this to your website's short name.
	description:
		"En La Feria del Aseo somos especialistas en la venta de productos y elementos de aseo diseñados para garantizar espacios limpios, seguros y agradables. Ofrecemos una amplia variedad de soluciones para el hogar, oficinas, negocios y empresas, siempre con productos de alta calidad y precios competitivos. Nuestra misión es ayudarte a mantener un entorno impecable con artículos confiables, prácticos y duraderos. Desde insumos básicos hasta productos especializados, contamos con un catálogo completo que se adapta a las necesidades de cada cliente. En La Feria del Aseo, la limpieza no es solo una tarea… es nuestra pasión. Y trabajamos cada día para que tengas acceso a los mejores productos, de manera fácil, rápida y con un servicio al cliente que te hará sentir en casa.", // Change this to be your website's description.
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


