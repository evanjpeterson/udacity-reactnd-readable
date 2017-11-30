import * as moment from 'moment'

export function formatTimestamp(timestamp) {
    return moment(timestamp).format('MMM Do YYYY, h:mm a')
}

