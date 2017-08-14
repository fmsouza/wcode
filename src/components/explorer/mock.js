export default {
    path: '/Users/myuser/workspace/',
    name: 'some-project-name',
    directory: {
        '_contents': [
            { name: '.gitignore', path: '.gitignore' },
            { name: 'package-lock.json', path: 'package-lock.json' },
            { name: 'package.json', path: 'package.json' },
            { name: 'README.md', path: 'README.md' },
            { name: 'yarn.lock', path: 'yarn.lock' }
        ],
        'node_modules' : {
            '_contents': []
        },
        'public': {
            '_contents': [
                {
                    name: 'favicon.ico',
                    path: 'public/favicon.ico'
                },
                {
                    name: 'index.html',
                    path: 'public/index.html'
                },
                {
                    name: 'manifest.json',
                    path: 'public/manifest.json'
                }
            ]
        },
        'src': {
            'components': {
                '_contents': []
            },
            '_contents': [
                {
                    name: 'App.css',
                    path: 'src/App.css'
                },
                {
                    name: 'App.js',
                    path: 'src/App.js'
                },
                {
                    name: 'App.test.js',
                    path: 'src/App.test.js'
                },
                {
                    name: 'index.js',
                    path: 'src/index.js'
                }
            ]
        }
    }
};