/**
 * User Table Interface
 * @param {number} id Auto generated id
 * @param {string} u_id Unique user id a the table primary key
 * @param {string} email User email address
 * @param {string} salt Unique salt string for every user
 * @param {string} password User hashed password
 * @param {string} first_name User first name
 * @param {string} last_name User last name
 * @param {boolean} is_active Is user active
 * @param {string} created_on Create date, generated automatically
 * @param {string} updated_on Update date, generated automatically
 * @param {string} deleted_on Delete date, generated automatically for soft delete
 */
export interface IUserTable {
    id: number;
    u_id: string;
    email: string;
    salt: string;
    password: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    created_on: string;
    updated_on: string;
    deleted_on: string;
}
