function trim(str) {
  const lines = str.split('\n').filter(Boolean);
  const padLength = lines[0].length - lines[0].trimLeft().length;
  const regex = new RegExp(`^\s{${padLength}}`);
  return lines.map((line) => line.replace(regex, '')).join('\n');
}

module.exports = trim;
