export function getAccessPoints (cb) {
  // fake an API request
  setTimeout(() => {
    let aps = [{name: 'Nat'}, {name: ' ...@Pinn Creative Space'}]
    cb(null, aps)
    // if (posts[id]) {
    //   cb(null, posts[id])
    // } else {
    //   cb(new Error('Post not found.'))
    // }
  }, 1000)
}
