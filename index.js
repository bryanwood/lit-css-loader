function template2(css) {
  return `import {css} from 'lit-element'; export default css\`${css}\`;`;
}

module.exports = function(content, map, meta) {
  content = content.replace("\\", "\\\\");
  return template2(content);
};
