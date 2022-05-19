const npm_url = function (name, version, path) {
  return `https://unpkg.com/${name}@${version}/${path}`;
}

module.exports = {
  npm_url,
}
