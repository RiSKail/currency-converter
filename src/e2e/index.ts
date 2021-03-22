import { generateImage } from 'jsdom-screenshot'
import resolutions from './resolutions'

const commonSettings = {
  waitUntilNetworkIdle: true,
}

interface IProps{
  filename?: any
}

export const snapshotConfiguration = ({ filename }: IProps) => {
  return {
    customSnapshotIdentifier: filename,
  }
}

export default async (expect: any, componentName: any) => {
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
