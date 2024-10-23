import * as core from '@actions/core'
import { wait } from './wait'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const resource_id = core.getInput('resource_id')
    const activity_term = core.getInput('activity_term')
    const entity_uri = core.getInput('entity_uri')
    const token = core.getInput('token')
    const contributor_orcid = core.getInput('contributor_orcid')

    core.debug(
      JSON.stringify(
        {
          resource_id,
          activity_term,
          entity_uri,
          token,
          contributor_orcid
        },
        null,
        2
      )
    )

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    await wait(1000)
    core.debug(new Date().toTimeString())

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
