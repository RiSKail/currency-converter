import { MatchImageSnapshotOptions } from 'jest-image-snapshot'
import { generateImage } from 'jsdom-screenshot'
import resolutions from './resolutions'

const commonSettings = {
  waitUntilNetworkIdle: true,
}

interface Iprops{
  filename: string;
}

export const snapshotConfiguration = ({ 
  filename, 
}: Iprops): MatchImageSnapshotOptions => {
  return {
    customSnapshotIdentifier: filename,
  }
}

export default async (expect: jest.Expect, componentName: string): Promise<void> => {
  const tests = Object
    .keys(resolutions)
    .map(resolution => ({
      image: generateImage(Object.assign(commonSettings, resolutions[resolution])),
      resolutionCode: resolution,
    }))

  for (let i = 0; i < tests.length; i += 1) {
    const { image, resolutionCode } = tests[i]
    const filename = `${componentName}-${resolutionCode}`

    const testResult = await image
    expect(testResult).toMatchImageSnapshot(snapshotConfiguration({ filename }))
  }
}
