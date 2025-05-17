const CracoLessPlugin = require('craco-less');
// const SetC7nRootEntryNamePlugin = require('choerodon-ui/outer-scripts/SetC7nRootEntryNamePlugin');

module.exports = {
  babel: {
    plugins: [
      [
        'import', {
          libraryName: 'choerodon-ui',
          style: true,
        }, 'c7n'
      ],
      [
        'import', {
          libraryName: 'choerodon-ui/pro',
          style: true,
        }, 'c7n-pro'
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            math: 'always',
            modifyVars: {
              '@c7n-icon-url': '~choerodon-ui-font/fonts/icomoon',
              '@text-color': 'rgba(0, 0, 0, 0.65)',
              '@tree-node-padding': '4px',
              '@tree-active-color': 'rgba(0, 0, 0, 0.65)',
              '@tree-line-before-bottom': '-4px',
              '@border-width-base': '1px',
              '@font-size-base': '14px',
              '@line-height-base': '1.5',
              '@alert-border-width': '1px',
              '@alert-icon-top': '8px',
              '@rem-base': '16px',
              '@rem-unit': '1rem',
              '@rem-px': '16px',
              '@rem-ratio': '1',
              '@rem-scale': '1',
              '@rem-root': '16px',
              '@rem-root-unit': '1rem',
              '@rem-root-px': '16px',
              '@rem-root-ratio': '1',
              '@rem-root-scale': '1',
              '@primary-color': '#1DA57A'
            },
          },
        },
        cssLoaderOptions: {
          url: true
        }
      },
    },
  ],
};