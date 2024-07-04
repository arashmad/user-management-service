/**
 * Query Object interface
 * @param {string} text Query string in which, parameters are specified by `$`
 * @param {string[]} values A list of strings which are values in query string
 * @example
 * const query = {
 *  text: 'INSERT INTO table(col1, col2) VALUES($1, $2)',
 *  values: ['val1', 'val2']
 * }
 * const res = await client.query(query)
 */
export interface IQuery {
    text: string;
    values: string[];
}
