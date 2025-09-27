// jest.config.ts
import { createDefaultPreset } from 'ts-jest';
import type { Config } from 'jest';

// createDefaultPreset() の結果から transform プロパティを抽出
const { transform: tsJestTransformCfg } = createDefaultPreset();

const config: Config = {
  testEnvironment: 'node',
  // スプレッド構文でトランスフォーム設定をマージ
  transform: {
    ...tsJestTransformCfg,
  },
};

export default config;
