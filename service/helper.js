import { stringify } from 'query-string'

export function objectToUrlParams(query) {
    return stringify(query);
}