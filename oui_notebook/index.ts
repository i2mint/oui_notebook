export * from './multi_time_vis';
import { renderTimeChannel, renderMultiTimeVis } from './multi_time_vis';
import { renderStoreExplorer } from './store_explorer';

if (window['otosense']) {
  window['otosense']['renderTimeChannel'] = renderTimeChannel;
  window['otosense']['renderMultiTimeVis'] = renderMultiTimeVis;
  window['otosense']['renderStoreExplorer'] = renderStoreExplorer;
}

window['renderTimeChannel'] = renderTimeChannel;
window['renderMultiTimeVis'] = renderMultiTimeVis;
