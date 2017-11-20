import { Injectable } from '@angular/core'
import * as Rollbar from 'rollbar';

@Injectable()

/**
 * The configuration options supported by the Rollbar service.
 *
 * For more information see here:
 *
 * https://rollbar.com/docs/notifier/rollbar.js/
 *
 */
export class RollbarConfig {
    /**
     * Your client API access token.
     *
     * @type {string}
     * @memberOf RollbarConfig
     */
    accessToken?: string;

    checkIgnore?: Function;

    /**
     * Whether logging is enabled, defaults to true.
     *
     * @type {boolean}
     * @memberOf RollbarConfig
     */
    enabled?: boolean;

    /**
     * The API endpoint that gets posted to.
     *
     * @type {string}
     * @memberOf RollbarConfig
     */
    endpoint?: string;

    /**
     * The message level that actually gets sent to Rollbar. Should be one of either:
     *
     *  - debug
     *  - info
     *  - warning
     *  - error
     *  - critical
     *
     * @type {string}
     * @memberOf RollbarConfig
     */
    reportLevel?: Rollbar.Level;

    /**
     * Whether to capture and report uncaught exceptions.
     *
     * @type {boolean}
     * @memberOf RollbarConfig
     */
    captureUncaught? : boolean;

    /**
     * Whether to capture and report unhandled promise rejections.
     *
     * @type {boolean}
     * @memberOf RollbarConfig
     */
    captureUnandledRejections? : boolean

    /**
     * Verbose mode logs to the console as well as to Rollbar.
     *
     * @type {boolean}
     * @memberOf RollbarConfig
     */
    verbose?: boolean;

    payload?: RollbarPayload;
}

/**
 * The Rollbar payload component that can be configured and sent with every log message.
 *
 * @export
 * @interface RollbarPayload
 */
export interface RollbarPayload {
    /**
     * Information about the logged in user.
     *
     * @type {{
     *         id: string;
     *         username?: string;
     *         email?: string;
     *     }}
     * @memberOf RollbarPayload
     */
    person?: {
        id: string;
        username?: string;
        email?: string;
    };

    /**
     * Context for the log message (route, etc)
     *
     * @type {string}
     * @memberOf RollbarPayload
     */
    context?: string;

    /**
     * Information about the client making the log message.
     *
     * @type {{
     *         javascript: {
     *             code_version: string;
     *         }
     *     }}
     * @memberOf RollbarPayload
     */
    client?: {
        javascript: {
            /**
             * The git commit hash or other version information.
             *
             * @type {string}
             */
            code_version: string;

            /**
             * When true, the Rollbar service will attempt to find and apply source maps to all frames in the stack trace.
             *
             * @type {boolean}
             */
            source_map_enabled: boolean;

            /**
             * When true, the Rollbar service will attempt to apply source maps to frames even if they are missing column numbers.
             * Works best when the minified javascript file is generated using newlines instead of semicolons.
             *
             * @type {boolean}
             */
            guess_uncaught_frames: boolean;
        }
    }

    /**
    * An object describing properties of the server that was used to generate the page the notifier is reporting on.
    *
    * @type {{
    *         branch: string;
    *         host: string;
    *     }}
    * @memberOf RollbarPayload
    */
    server?: {
      /**
      * The name of the branch of the code that is running. Used for linking filenames in stacktraces to GitHub.
      *
      * @type {string}
      */
      branch?: string;

      /**
      * The hostname of the machine that rendered the page
      *
      * @type {string}
      */
      host?: string;
    }

    /**
     * rollbar log environment (e.g. production, staging, etc.)
     *
     * @type {string}
     * @memberOf RollbarPayload
     */
    environment?: string;
}
