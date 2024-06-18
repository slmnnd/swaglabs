import {driver} from '@wdio/globals'

async function swipe(from, to){
    await driver
    .action('pointer')
    .move({x: from, y:500})
    .down()
    .pause(100)
    .move({duration:500, x:to, y:500})
    .up()
    .perform()

}

export default swipe