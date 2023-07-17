import DockerfilatorMetadata from 'src/metadata/DockerfilatorMetadata';
import { DefaultData } from 'leto-modelizer-plugin-core';

describe('Test class: DockerfilatorMetadata', () => {
  describe('Test method: validate', () => {
    it('should return true', () => {
      expect(new DockerfilatorMetadata().validate()).toEqual(true);
    });
  });

  describe('Test method: parse', () => {
    it('should set components definitions to empty array', () => {
      const pluginData = new DefaultData();
      pluginData.definitions.components = ['a'];

      new DockerfilatorMetadata(pluginData).parse();

      expect(pluginData.definitions.components).toEqual([]);
    });
  });
});
