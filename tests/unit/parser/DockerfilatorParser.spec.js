import DockerfilatorParser from 'src/parser/DockerfilatorParser';
import {
  DefaultData,
  FileInformation,
} from 'leto-modelizer-plugin-core';

describe('Test DockerfilatorParser', () => {
  describe('Test methods', () => {
    describe('Test method: isParsable', () => {
      it('should return false', () => {
        expect(new DockerfilatorParser().isParsable(new FileInformation({
          path: '',
        }))).toEqual(false);
      });
    });

    describe('Test method: getModels', () => {
      it('should return an empty array without parameter', () => {
        const parser = new DockerfilatorParser();

        expect(parser.getModels()).toEqual([]);
      });
    });

    describe('Test method: parse', () => {
      it('should set pluginData components and parseErrors to empty array', () => {
        const pluginData = new DefaultData();
        const parser = new DockerfilatorParser(pluginData);

        parser.parse();

        expect(parser.pluginData.components).toEqual([]);
        expect(parser.pluginData.parseErrors).toEqual([]);
      });
    });
  });
});
