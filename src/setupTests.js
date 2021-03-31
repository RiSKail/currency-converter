import { configureToMatchImageSnapshot } from 'jest-image-snapshot'

jest.setTimeout(30000)

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot({
    customSnapshotsDir: 'snapshots/origin',
    customDiffDir: 'snapshots/diff',
  }),
})
