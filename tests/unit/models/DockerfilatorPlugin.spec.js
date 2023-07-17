import DockerfilatorPlugin from 'src/models/DockerfilatorPlugin';

describe('Test class: DockerfilatorPlugin', () => {
  describe('Test constructor', () => {
    it('Check variable initialization', () => {
      const plugin = new DockerfilatorPlugin();

      expect(plugin.data).not.toBeNull();
      expect(plugin.__drawer).not.toBeNull();
      expect(plugin.__parser).not.toBeNull();
      expect(plugin.__metadata).not.toBeNull();
      expect(plugin.__renderer).not.toBeNull();
    });
  });
});
