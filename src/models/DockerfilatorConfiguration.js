import { DefaultConfiguration, Tag } from 'leto-modelizer-plugin-core';

/**
 * Dockerfile configuration.
 */
class DockerfilatorConfiguration extends DefaultConfiguration {
  /**
   * Default constructor.
   * @param {object} [props] - Object that contains all properties to set.
   */
  constructor(props) {
    super({
      ...props,
      defaultFileName: 'Dockerfile',
      defaultFileExtension: null,
      editor: {
        ...props?.editor,
      },
      tags: [
        new Tag({ type: 'language', value: 'Docker' }),
        new Tag({ type: 'category', value: 'Container' }),
        new Tag({ type: 'category', value: 'Virtualization' }),
      ],
    });
  }
}

export default DockerfilatorConfiguration;
