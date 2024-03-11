module.exports = {
  apps: [
    // Console
    {
      name: "proxy-console",
      cwd: "/root/workplace/Console/ConsoleApi",
      script: "./haproxy/start.sh",
      namespace: "console"
    },
    // Media
    {
      name: "app-media",
      cwd: "/root/workplace/Media/MediaApp",
      namespace: "media",
      script: "serve",
      env: {
        PM2_SERVE_PATH: 'dist',
        PM2_SERVE_PORT: 34200,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    },
    {
      name: "api-media",
      cwd: "/root/workplace/Media/MediaApi",
      script: "./scripts/start.sh",
      interpreter: "bash",
      namespace: "media",
      env: { PORT: 34201 }
    },
    // Streams
    {
      name: "app-streams",
      cwd: "/root/workplace/Streams/StreamsApp",
      namespace: "streams",
      script: "serve",
      env: {
        PM2_SERVE_PATH: 'dist',
        PM2_SERVE_PORT: 34202,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    },
    // Transcribe
    {
      name: "app-transcribe",
      cwd: "/root/workplace/TranscriberApp",
      namespace: "transcribe",
      script: "serve",
      env: {
        PM2_SERVE_PATH: 'dist',
        PM2_SERVE_PORT: 34203,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    },
  ]
}
