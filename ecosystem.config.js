module.exports = {
    apps: [
      {
        name: 'ftxpo',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max', 
        script: './node_modules/nuxt/bin/nuxt.mjs',
        args: 'start'
      }
    ]
  }