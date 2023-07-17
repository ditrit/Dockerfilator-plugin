import {
  DefaultPlugin,
  DefaultData,
} from 'leto-modelizer-plugin-core';
import DockerfilatorDrawer from 'src/draw/DockerfilatorDrawer';
import DockerfilatorMetadata from 'src/metadata/DockerfilatorMetadata';
import DockerfilatorParser from 'src/parser/DockerfilatorParser';
import DockerfilatorRenderer from 'src/render/DockerfilatorRenderer';
import DockerfilatorConfiguration from 'src/models/DockerfilatorConfiguration';
import packageInfo from 'package.json';

/**
 * Dockerfile plugin.
 */
class DockerfilatorPlugin extends DefaultPlugin {
  /**
   * Default constructor.
   * @param {object} [props] - Object that contains all properties to set.
   * @param {object} [props.event] - Event manager.
   * @param {Function} [props.event.next] - Function to emit event.
   */
  constructor(props = {
    event: null,
  }) {
    const configuration = new DockerfilatorConfiguration();
    const pluginData = new DefaultData(configuration, {
      name: packageInfo.name,
      version: packageInfo.version,
    }, props.event);

    super({
      pluginData,
      pluginDrawer: new DockerfilatorDrawer(pluginData),
      pluginMetadata: new DockerfilatorMetadata(pluginData),
      pluginParser: new DockerfilatorParser(pluginData),
      pluginRenderer: new DockerfilatorRenderer(pluginData),
      configuration,
    });
  }
}

export default DockerfilatorPlugin;
