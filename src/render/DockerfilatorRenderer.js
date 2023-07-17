import { DefaultRender } from 'leto-modelizer-plugin-core';

/**
 * Class to render Dockerfile files from components/links.
 */
class DockerfilatorRenderer extends DefaultRender {
  /**
   * Convert all provided components and links in Dockerfile files.
   * @returns {FileInput[]} Array of generated files from components and links.
   */
  renderFiles() {
    return [];
  }
}

export default DockerfilatorRenderer;
