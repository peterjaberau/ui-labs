import * as sourcegraph from 'sourcegraph'
import { Position } from './position.ts'
import { Range } from './range.ts'
import { isURL } from './url.ts'

export class Location implements sourcegraph.Location {
    public static isLocation(thing: unknown): thing is sourcegraph.Location {
        if (thing instanceof Location) {
            return true
        }
        if (!thing) {
            return false
        }
        return Range.isRange((thing as Location).range) && isURL((thing as Location).uri)
    }

    public readonly range?: sourcegraph.Range

    constructor(public readonly uri: URL, rangeOrPosition?: sourcegraph.Range | sourcegraph.Position) {
        if (!rangeOrPosition) {
            // that's OK
        } else if (rangeOrPosition instanceof Range) {
            this.range = rangeOrPosition
        } else if (rangeOrPosition instanceof Position) {
            this.range = new Range(rangeOrPosition, rangeOrPosition)
        } else {
            throw new TypeError('Illegal argument')
        }
    }

    public toJSON(): any {
        return {
            uri: this.uri,
            range: this.range,
        }
    }
}
