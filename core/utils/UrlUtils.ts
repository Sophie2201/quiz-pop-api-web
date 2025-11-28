class UrlUtils {
  getUrlBase(): string {
    return process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_API_URL ?? "";
  }
}

export default new UrlUtils();
