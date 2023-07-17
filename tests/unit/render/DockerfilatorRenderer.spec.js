import DockerfilatorRenderer from 'src/render/DockerfilatorRenderer';
import { DefaultData } from 'leto-modelizer-plugin-core';

describe('Test DockerfilatorRenderer', () => {
  describe('Test method: renderFiles', () => {
    it('should render an empty array', () => {
      const pluginData = new DefaultData();

      expect(new DockerfilatorRenderer(pluginData).renderFiles()).toEqual([]);
    });
  });
});
