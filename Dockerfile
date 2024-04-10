# Use the official Node.js Alpine image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install Chromium
ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true" \
    NODE_ENV="production" \
    PORT=3000 \
    API_KEY="INigujhi657HBHGHVhvtkv9vbgcj3y" \
    BASE_URL="https://api-wa.gracehopper.ai" \
    BASE_WEBHOOK_URL="https://api-wa.gracehopper.ai/localCallbackExample" \
    ENABLE_LOCAL_CALLBACK_EXAMPLE=TRUE \
    RATE_LIMIT_MAX=1000 \
    RATE_LIMIT_WINDOW_MS=1000 \
    MAX_ATTACHMENT_SIZE=10000000 \
    SET_MESSAGES_AS_SEEN=TRUE \
    DISABLED_CALLBACKS="message_ack|message_reaction" \
    WEB_VERSION="2.2328.5" \
    WEB_VERSION_CACHE_TYPE=none \
    RECOVER_SESSIONS=TRUE \
    SESSIONS_PATH="./sessions" \
    ENABLE_SWAGGER_ENDPOINT=TRUE

RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium \
    git

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the source code to the working directory
COPY . .

# Install the dependencies
RUN npm i

# Expose the port the API will run on
EXPOSE 3000

# Start the API
CMD ["node", "server.js"]