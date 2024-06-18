import {driver} from '@wdio/globals'

async function scroll(from, to){
    await driver
    .action('pointer')
    .move({x: 250, y:from})
    .down()
    .pause(100)
    .move({duration:200, x:250, y:to})
    .up()
    .perform()

}

export default scroll