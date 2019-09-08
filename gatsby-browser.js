/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

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
