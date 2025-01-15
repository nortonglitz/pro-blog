/**
 * Extracts the site name (domain name) from a given URL.
 *
 * @param {string} url - The URL string to extract the site name from.
 * @returns {string | null} The site name (e.g., "example" from "https://www.example.com"), or `null` if invalid.
 *
 * @example
 * getSiteName("https://www.example.com");
 * // Returns: "example"
 *
 * getSiteName("https://subdomain.website.org");
 * // Returns: "website"
 *
 * getSiteName("not-a-valid-url");
 * // Returns: null
 */
export function getSiteNameFromURL(url: string): string | null {
  try {
    // Parse the URL
    const parsedUrl = new URL(url)

    // Extract the hostname (e.g., "www.example.com")
    const hostname = parsedUrl.hostname

    // Split the hostname into parts (e.g., ["www", "example", "com"])
    const parts = hostname.split(".")

    // Handle "www" or subdomains by returning the second-to-last part (e.g., "example")
    return parts.length > 2 ? parts[parts.length - 2] : parts[0]
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Invalid URL:", error)
    }
    return null
  }
}
