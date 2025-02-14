
import { anyDict } from 'types/index'
import BrowsePlugin from './browse'
import SearchPlugin from './search'
import PythonPlugin from './python'
import ImagePlugin from './image'
import VideoPlugin from './video'
import YouTubePlugin from './youtube'
import MemoryPlugin from './memory'
//import VegaPlugin from './vega'
import NestorPlugin from './nestor'

export const availablePlugins: anyDict = {
  image: ImagePlugin,
  video: VideoPlugin,
  search: SearchPlugin,
  browse: BrowsePlugin, 
  youtube: YouTubePlugin,
  memory: MemoryPlugin,
  //vega: VegaPlugin,
  python:  PythonPlugin,
  nestor: NestorPlugin,
}
