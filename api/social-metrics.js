import { handleSocialMetricsHttpRequest } from '../server/socialMetricsHttp.mjs'

export default async function handler(req, res) {
  await handleSocialMetricsHttpRequest(req, res)
}
