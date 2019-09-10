const React = require("react");
const Layout = require("./src/components/layout").default;

// set the csrf meta tag on load
exports.onClientEntry = () => {
  fetch("/api/")
    .then(res => res.json())
    .then(data => {
      const head = document.head;
      const csrfMeta = document.createElement('meta');
      csrfMeta.setAttribute('name', 'csrf-token');
      csrfMeta.setAttribute('content', data.csrfToken);
      head.appendChild(csrfMeta);
    })
}

exports.wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}
