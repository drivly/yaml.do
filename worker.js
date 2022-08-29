import yaml from 'yaml'

export default {
  fetch: async req => {
    const { pathname, search } = new URL(req.url)
    const res = await fetch('https:/' + pathname + search, req).then(res => res.text())
    if (res.headers.get('content-type').includes('json')) {
      const data = await res.json()      
      return new Response(yaml.stringify(data), { headers: { 'content-type': 'application/yaml' }})
    } else {
      const data = await res.text()
      return new Response(JSON.stringify(yaml.parse(data), null, 2), { headers: { 'content-type': 'application/json' }})
    }
  }
}
