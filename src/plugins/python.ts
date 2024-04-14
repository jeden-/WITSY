
import { PluginParameter, anyDict } from '../index.d'
import { Configuration } from '../config.d'
import { ipcRenderer } from 'electron'
import Plugin from './plugin'

export default class extends Plugin {

  constructor(config: Configuration) {
    super(config)
  }

  isEnabled(): boolean {
    return true
  }

  getName(): string {
    return 'run_python_code'
  }

  getDescription(): string {
    return 'Execute Python code and return the result'
  }

  getParameters(): PluginParameter[] {
    return [
      {
        name: 'script',
        type: 'string',
        description: 'The script to run',
        required: true
      }
    ]
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(parameters: anyDict): Promise<anyDict> {

    // make sure last line is a print
    let script = parameters.script
    const lines = script.split('\n')
    const lastLine = lines[lines.length - 1]
    if (!lastLine.startsWith('print(')) {
      lines[lines.length - 1] = `print(${lastLine})`
      script = lines.join('\n')
    }

    // now run it
    const output = ipcRenderer.sendSync('run-python-code', script)
    return {
      result: output?.join('\n')
    }
  }  

}
