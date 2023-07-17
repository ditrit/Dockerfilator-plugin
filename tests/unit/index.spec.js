import Plugin from 'src/index';

describe('Test index of project', () => {
  it('should return DockerfilatorPlugin', () => {
    expect(new Plugin().constructor.name).toEqual('DockerfilatorPlugin');
  });
});
