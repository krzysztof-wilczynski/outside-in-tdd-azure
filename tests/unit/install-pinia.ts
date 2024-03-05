import {config} from '@vue/test-utils'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {cloneDeep} from 'lodash-es'
import {beforeAll, afterAll} from 'vitest'
import {createTestingPinia, TestingOptions} from '@pinia/testing'
import {Plugin} from 'vue'

export function installPinia(options?: Partial<TestingOptions>) {
  const globalConfigBackup = cloneDeep(config.global);

  beforeAll(() => {
    config.global.plugins.unshift(
      createTestingPinia(options) as unknown as Plugin
    )
  })

  afterAll(() => {
    config.global = globalConfigBackup
  })
}
