module.exports = {
    experimental: {
        // prevent babel config required for tests from disabling SWC
        // https://nextjs.org/docs/messages/swc-disabled
        forceSwcTransforms: true,
    },
}
