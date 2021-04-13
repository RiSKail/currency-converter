module.exports = {
  runtimeCaching: [
    {
      urlPattern: '/messages',
      handler: 'networkFirst',
    },
  ],
}
