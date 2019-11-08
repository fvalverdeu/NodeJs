import { GraphQLModule } from '@graphql-modules/core'
import options from './modules/menu_options/graphql'
import profile from './modules/profile/graphql'
import currentCampaign from './modules/campaign/graphql'

export default new GraphQLModule({
  imports: [profile, options, currentCampaign],
})
