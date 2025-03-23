import './infrastructure/config/env.config'

import { config } from './infrastructure/config/main.config'
import { app } from './infrastructure/server/app'

async function bootstrap() {
  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`)
  })
}

void bootstrap()
