import yaml from 'yaml'

export default {
  fetch: async req => {
    const { pathname, search } = new URL(req.url)
    const data = await fetch('https:/' + pathname + search, req).then(res => res.text())
    return new Response(JSON.stringify(yaml(data), null, 2), { headers: { 'content-type': 'application/json' }})
  }
}
