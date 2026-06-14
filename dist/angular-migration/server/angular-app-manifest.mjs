
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ALYQJIID.js",
      "chunk-QTPIOFC6.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J373LAEK.js",
      "chunk-QTPIOFC6.js"
    ],
    "route": "/projects/fdf"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J373LAEK.js",
      "chunk-QTPIOFC6.js"
    ],
    "route": "/projects/philo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J373LAEK.js",
      "chunk-QTPIOFC6.js"
    ],
    "route": "/projects/push_swap"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J373LAEK.js",
      "chunk-QTPIOFC6.js"
    ],
    "route": "/projects/minishell"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-J373LAEK.js",
      "chunk-QTPIOFC6.js"
    ],
    "route": "/projects/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BOCJ4B3Y.js"
    ],
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LUPCP3BP.js"
    ],
    "route": "/awards"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TF5JLGOZ.js"
    ],
    "route": "/terminal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVH2KBDB.js"
    ],
    "route": "/42"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-77B4OYYK.js"
    ],
    "route": "/404"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-77B4OYYK.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 533692, hash: '64d3649fa181afc1ec3a372aef5af76f7d1f9bd382df3406558da8a8737305bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: 'bc69bad811672fa5b6e370d324d27a579e3266d0b8c9a5f916eaa79f03cb1b36', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 579648, hash: 'a9fc6492c243f36deb5edd31a608b026f90eeeb855a013ebd111976bd7c9f181', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 577830, hash: 'ff07101c1af00b9c17f55db3803806d33287d3dd9d07ae7870d3a44a88fc3f87', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'projects/minishell/index.html': {size: 573349, hash: '5f4d1e37683ee6a5d1552458ba391ff5e7368ac25103f28a19eb5a756f951cb2', text: () => import('./assets-chunks/projects_minishell_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 610802, hash: '37e8da0ff98b873ccbf331e9341bd415804907bbd77d859435f055d8c4766628', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    '404/index.html': {size: 571326, hash: '7c2984a9e2374bfcfa62de0e359d07093736cbd760a3a871afd04ec3cb9aba3f', text: () => import('./assets-chunks/404_index_html.mjs').then(m => m.default)},
    'projects/philo/index.html': {size: 573533, hash: 'c91cba0fbb7d1cb19520b831752853d2860c194a25c6fa844054d304b3cf8bf4', text: () => import('./assets-chunks/projects_philo_index_html.mjs').then(m => m.default)},
    '42/index.html': {size: 575524, hash: '594b8b55c7f6448f3ddedc1cdf266868c0d7c4cf74b0c1cb4ade7bfcb8a475ef', text: () => import('./assets-chunks/42_index_html.mjs').then(m => m.default)},
    'awards/index.html': {size: 577930, hash: '77c47fe81d38a68551f5e30c6af6f2e1feaaed3534f7edbc9f123d0ff96c498e', text: () => import('./assets-chunks/awards_index_html.mjs').then(m => m.default)},
    'projects/push_swap/index.html': {size: 574250, hash: '63cd2bcf92a16229a2f3190024dbbbb88ccc6b8fee05037981f1c3d7c437ffcf', text: () => import('./assets-chunks/projects_push_swap_index_html.mjs').then(m => m.default)},
    'projects/fdf/index.html': {size: 573810, hash: 'b52f722931d1947aa6bbebecdaca26b3b99f70455795bb341f521e4f47eb4ae9', text: () => import('./assets-chunks/projects_fdf_index_html.mjs').then(m => m.default)},
    'terminal/index.html': {size: 574881, hash: 'b91672a8e59f30e7415b535c7ad251ff5bcc93412e72b768222c9cdd02af06b6', text: () => import('./assets-chunks/terminal_index_html.mjs').then(m => m.default)},
    'styles-KF6IF3QV.css': {size: 586033, hash: '0I02TctpMZQ', text: () => import('./assets-chunks/styles-KF6IF3QV_css.mjs').then(m => m.default)}
  },
};
