import {driver} from '@wdio/globals'

async function dragTo(elementOne, elementTwo) {
    await driver.performActions([
        {
            // 1. Create the event
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                // 2. Move finger into start position where the element is
                //    Appium can automatically determine the location of the element instead
                //    of doing it ourselves
                { type: 'pointerMove', duration: 0, origin: elementOne.elementId  },
                // 3. Finger comes down into contact with screen
                { type: 'pointerDown', button: 0 },
                // 4. Pause for a little bit
                { type: 'pause', duration: 100 },
                // 5. Finger moves to the second element.
                //    Appium can automatically determine the location of the element instead
                //    of doing it ourselves
                { type: 'pointerMove', duration: 250, origin: elementTwo.elementId  },
                // 6. Finger lets up, off the screen
                { type: 'pointerUp', button: 0 },
            ],
        },
    ]);

    // Add a pause, just to make sure the drag and drop is done
    await driver.pause(1000);
}

export default dragTo
