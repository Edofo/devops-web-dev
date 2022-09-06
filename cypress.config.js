module.exports = {
    e2e: {
        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },

    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
    },
}
