module.exports = {
  parallel: false
  // parallel:false needed or will fail building:
  //  Module build failed (from ./node_modules/thread-loader/dist/cjs.js):
  // Thread Loader (Worker 0)
  // Cannot read property 'content' of null
};
