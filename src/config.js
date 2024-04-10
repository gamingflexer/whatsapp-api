// Load environment variables from .env file
require('dotenv').config()

// setup global const
const sessionFolderPath = process.env.SESSIONS_PATH || './sessions'
const enableLocalCallbackExample = (process.env.ENABLE_LOCAL_CALLBACK_EXAMPLE || '').toLowerCase() === 'true'
const globalApiKey = process.env.API_KEY || 'INigujhi657HBHGHVhvtkv9vbgcj3y'
// const baseWebhookURL = process.env.BASE_WEBHOOK_URL || 'https://api-wa.gracehopper.ai/localCallbackExample'
const baseWebhookURL = 'https://api-wa.gracehopper.ai/localCallbackExample'
console.log("baseWebhookURL-->", baseWebhookURL)
const maxAttachmentSize = parseInt(process.env.MAX_ATTACHMENT_SIZE) || 10000000
const setMessagesAsSeen = (process.env.SET_MESSAGES_AS_SEEN || '').toLowerCase() === 'true'
// const disabledCallbacks = process.env.DISABLED_CALLBACKS ? process.env.DISABLED_CALLBACKS.split('|') : [] 
const defaultDisabledCallbacks = "message_ack|message_reaction";
const disabledCallbacks = !process.env.DISABLED_CALLBACKS || process.env.DISABLED_CALLBACKS.trim() === ""
  ? defaultDisabledCallbacks.split('|')
  : process.env.DISABLED_CALLBACKS.split('|');

const enableSwaggerEndpoint = (process.env.ENABLE_SWAGGER_ENDPOINT || '').toLowerCase() === 'true'
const webVersion = process.env.WEB_VERSION || '2.2328.5'
const webVersionCacheType = process.env.WEB_VERSION_CACHE_TYPE || 'none'
const rateLimitMax = process.env.RATE_LIMIT_MAX || 1000
const rateLimitWindowMs = process.env.RATE_LIMIT_WINDOW_MS || 1000
const recoverSessions = (process.env.RECOVER_SESSIONS || '').toLowerCase() === 'true'

module.exports = {
  sessionFolderPath,
  enableLocalCallbackExample,
  globalApiKey,
  baseWebhookURL,
  maxAttachmentSize,
  setMessagesAsSeen,
  disabledCallbacks,
  enableSwaggerEndpoint,
  webVersion,
  webVersionCacheType,
  rateLimitMax,
  rateLimitWindowMs,
  recoverSessions
}
