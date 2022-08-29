import yaml from 'yaml'

export default {
  fetch: async req => {
    const { pathname, search } = new URL(req.url)
    const res = await fetch('https:/' + pathname + search, req)
    if (res.headers.get('content-type').includes('json')) {
      const data = await res.json()      
      return new Response(yaml.stringify(data)) //, { headers: { 'content-type': 'application/text' }})
    } else {
      const data = await res.text()
      return new Response(JSON.stringify(yaml.parse(data), null, 2), { headers: { 'content-type': 'application/json' }})
    }
  }
}
