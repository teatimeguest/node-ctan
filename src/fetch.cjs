let esm = null;

async function fetch(url, init) {
  esm ??= await import('node-fetch');
  const request = new esm.Request(url, init);
  try {
    return { request, response: await esm.default(request) };
  } catch (error) {
    return { request, error };
  }
}

module.exports.fetch = fetch;
