import { CmdRest } from './delivery/api/rest/cmd/cmd.js'

class Main {
    init() {
        new CmdRest().server()
    }
}

new Main().init()