# ![LOGO](logo.png) DevTestLabsClient **flow**ground Connector

## Description

A generated **flow**ground connector for the DevTestLabsClient API (version 2018-09-15).

Generated from: https://api.apis.guru/v2/specs/azure.com/devtestlabs-DTL/2018-09-15/swagger.json<br/>
Generated at: 2019-05-07T17:38:05+03:00

## API Description

The DevTest Labs Client.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Result of the request to list REST API operations

*Tags:* `ProviderOperations`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### List labs in a subscription.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Get operation.

*Tags:* `Operations`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `locationName` - _required_ - The name of the location.
* `name` - _required_ - The name of the operation.
* `api-version` - _required_ - Client API version.

### List schedules in a subscription.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### List labs in a resource group.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### List artifact sources in a given lab.

*Tags:* `ArtifactSources`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=displayName)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### List azure resource manager templates in a given artifact source.

*Tags:* `ArmTemplates`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `artifactSourceName` - _required_ - The name of the artifact source.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=displayName)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Get azure resource manager template.

*Tags:* `ArmTemplates`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `artifactSourceName` - _required_ - The name of the artifact source.
* `name` - _required_ - The name of the azure Resource Manager template.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=displayName)'
* `api-version` - _required_ - Client API version.

### List artifacts in a given artifact source.

*Tags:* `Artifacts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `artifactSourceName` - _required_ - The name of the artifact source.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=title)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Get artifact.

*Tags:* `Artifacts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `artifactSourceName` - _required_ - The name of the artifact source.
* `name` - _required_ - The name of the artifact.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=title)'
* `api-version` - _required_ - Client API version.

### Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.

*Tags:* `Artifacts`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `artifactSourceName` - _required_ - The name of the artifact source.
* `name` - _required_ - The name of the artifact.
* `api-version` - _required_ - Client API version.

### Delete artifact source.

*Tags:* `ArtifactSources`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the artifact source.
* `api-version` - _required_ - Client API version.

### Get artifact source.

*Tags:* `ArtifactSources`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the artifact source.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=displayName)'
* `api-version` - _required_ - Client API version.

### Modify properties of artifact sources.

*Tags:* `ArtifactSources`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the artifact source.
* `api-version` - _required_ - Client API version.

### Create or replace an existing artifact source.

*Tags:* `ArtifactSources`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the artifact source.
* `api-version` - _required_ - Client API version.

### Get cost.

*Tags:* `Costs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the cost.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($expand=labCostDetails)'
* `api-version` - _required_ - Client API version.

### Create or replace an existing cost.

*Tags:* `Costs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the cost.
* `api-version` - _required_ - Client API version.

### List custom images in a given lab.

*Tags:* `CustomImages`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=vm)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete custom image. This operation can take a while to complete.

*Tags:* `CustomImages`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the custom image.
* `api-version` - _required_ - Client API version.

### Get custom image.

*Tags:* `CustomImages`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the custom image.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=vm)'
* `api-version` - _required_ - Client API version.

### Modify properties of custom images.

*Tags:* `CustomImages`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the custom image.
* `api-version` - _required_ - Client API version.

### Create or replace an existing custom image. This operation can take a while to complete.

*Tags:* `CustomImages`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the custom image.
* `api-version` - _required_ - Client API version.

### List formulas in a given lab.

*Tags:* `Formulas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=description)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete formula.

*Tags:* `Formulas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the formula.
* `api-version` - _required_ - Client API version.

### Get formula.

*Tags:* `Formulas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the formula.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=description)'
* `api-version` - _required_ - Client API version.

### Modify properties of formulas.

*Tags:* `Formulas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the formula.
* `api-version` - _required_ - Client API version.

### Create or replace an existing Formula. This operation can take a while to complete.

*Tags:* `Formulas`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the formula.
* `api-version` - _required_ - Client API version.

### List gallery images in a given lab.

*Tags:* `GalleryImages`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=author)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### List notification channels in a given lab.

*Tags:* `NotificationChannels`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=webHookUrl)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete notification channel.

*Tags:* `NotificationChannels`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the notificationChannel.
* `api-version` - _required_ - Client API version.

### Get notification channel.

*Tags:* `NotificationChannels`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the notificationChannel.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=webHookUrl)'
* `api-version` - _required_ - Client API version.

### Modify properties of notification channels.

*Tags:* `NotificationChannels`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the notificationChannel.
* `api-version` - _required_ - Client API version.

### Create or replace an existing notificationChannel.

*Tags:* `NotificationChannels`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the notificationChannel.
* `api-version` - _required_ - Client API version.

### Send notification to provided channel.

*Tags:* `NotificationChannels`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the notificationChannel.
* `api-version` - _required_ - Client API version.

### Evaluates lab policy.

*Tags:* `PolicySets`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the policy set.
* `api-version` - _required_ - Client API version.

### List policies in a given policy set.

*Tags:* `Policies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `policySetName` - _required_ - The name of the policy set.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=description)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete policy.

*Tags:* `Policies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `policySetName` - _required_ - The name of the policy set.
* `name` - _required_ - The name of the policy.
* `api-version` - _required_ - Client API version.

### Get policy.

*Tags:* `Policies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `policySetName` - _required_ - The name of the policy set.
* `name` - _required_ - The name of the policy.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=description)'
* `api-version` - _required_ - Client API version.

### Modify properties of policies.

*Tags:* `Policies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `policySetName` - _required_ - The name of the policy set.
* `name` - _required_ - The name of the policy.
* `api-version` - _required_ - Client API version.

### Create or replace an existing policy.

*Tags:* `Policies`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `policySetName` - _required_ - The name of the policy set.
* `name` - _required_ - The name of the policy.
* `api-version` - _required_ - Client API version.

### List schedules in a given lab.

*Tags:* `Schedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete schedule.

*Tags:* `Schedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Get schedule.

*Tags:* `Schedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the schedule.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `api-version` - _required_ - Client API version.

### Modify properties of schedules.

*Tags:* `Schedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Create or replace an existing schedule.

*Tags:* `Schedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Execute a schedule. This operation can take a while to complete.

*Tags:* `Schedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Lists all applicable schedules

*Tags:* `Schedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### List service runners in a given lab.

*Tags:* `ServiceRunners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete service runner.

*Tags:* `ServiceRunners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the service runner.
* `api-version` - _required_ - Client API version.

### Get service runner.

*Tags:* `ServiceRunners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the service runner.
* `api-version` - _required_ - Client API version.

### Create or replace an existing Service runner.

*Tags:* `ServiceRunners`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the service runner.
* `api-version` - _required_ - Client API version.

### List user profiles in a given lab.

*Tags:* `Users`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=identity)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete user profile. This operation can take a while to complete.

*Tags:* `Users`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the user profile.
* `api-version` - _required_ - Client API version.

### Get user profile.

*Tags:* `Users`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the user profile.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=identity)'
* `api-version` - _required_ - Client API version.

### Modify properties of user profiles.

*Tags:* `Users`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the user profile.
* `api-version` - _required_ - Client API version.

### Create or replace an existing user profile. This operation can take a while to complete.

*Tags:* `Users`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the user profile.
* `api-version` - _required_ - Client API version.

### List disks in a given user profile.

*Tags:* `Disks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=diskType)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete disk. This operation can take a while to complete.

*Tags:* `Disks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the disk.
* `api-version` - _required_ - Client API version.

### Get disk.

*Tags:* `Disks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the disk.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=diskType)'
* `api-version` - _required_ - Client API version.

### Modify properties of disks.

*Tags:* `Disks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the disk.
* `api-version` - _required_ - Client API version.

### Create or replace an existing disk. This operation can take a while to complete.

*Tags:* `Disks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the disk.
* `api-version` - _required_ - Client API version.

### Attach and create the lease of the disk to the virtual machine. This operation can take a while to complete.

*Tags:* `Disks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the disk.
* `api-version` - _required_ - Client API version.

### Detach and break the lease of the disk attached to the virtual machine. This operation can take a while to complete.

*Tags:* `Disks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the disk.
* `api-version` - _required_ - Client API version.

### List environments in a given user profile.

*Tags:* `Environments`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=deploymentProperties)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete environment. This operation can take a while to complete.

*Tags:* `Environments`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the environment.
* `api-version` - _required_ - Client API version.

### Get environment.

*Tags:* `Environments`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the environment.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=deploymentProperties)'
* `api-version` - _required_ - Client API version.

### Modify properties of environments.

*Tags:* `Environments`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the environment.
* `api-version` - _required_ - Client API version.

### Create or replace an existing environment. This operation can take a while to complete.

*Tags:* `Environments`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the environment.
* `api-version` - _required_ - Client API version.

### List secrets in a given user profile.

*Tags:* `Secrets`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=value)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete secret.

*Tags:* `Secrets`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### Get secret.

*Tags:* `Secrets`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the secret.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=value)'
* `api-version` - _required_ - Client API version.

### Modify properties of secrets.

*Tags:* `Secrets`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### Create or replace an existing secret. This operation can take a while to complete.

*Tags:* `Secrets`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### List service fabrics in a given user profile.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete service fabric. This operation can take a while to complete.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the service Fabric.
* `api-version` - _required_ - Client API version.

### Get service fabric.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the service Fabric.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
* `api-version` - _required_ - Client API version.

### Modify properties of service fabrics.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the service Fabric.
* `api-version` - _required_ - Client API version.

### Create or replace an existing Service Fabric. This operation can take a while to complete.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the service Fabric.
* `api-version` - _required_ - Client API version.

### Lists the applicable start/stop schedules, if any.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the service Fabric.
* `api-version` - _required_ - Client API version.

### Start a service fabric. This operation can take a while to complete.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the service Fabric.
* `api-version` - _required_ - Client API version.

### Stop a service fabric This operation can take a while to complete.

*Tags:* `ServiceFabrics`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `name` - _required_ - The name of the service Fabric.
* `api-version` - _required_ - Client API version.

### List schedules in a given service fabric.

*Tags:* `ServiceFabricSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `serviceFabricName` - _required_ - The name of the service Fabric.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete schedule.

*Tags:* `ServiceFabricSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `serviceFabricName` - _required_ - The name of the service Fabric.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Get schedule.

*Tags:* `ServiceFabricSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `serviceFabricName` - _required_ - The name of the service Fabric.
* `name` - _required_ - The name of the schedule.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `api-version` - _required_ - Client API version.

### Modify properties of schedules.

*Tags:* `ServiceFabricSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `serviceFabricName` - _required_ - The name of the service Fabric.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Create or replace an existing schedule.

*Tags:* `ServiceFabricSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `serviceFabricName` - _required_ - The name of the service Fabric.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Execute a schedule. This operation can take a while to complete.

*Tags:* `ServiceFabricSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `userName` - _required_ - The name of the user profile.
* `serviceFabricName` - _required_ - The name of the service Fabric.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### List virtual machines in a given lab.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete virtual machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Get virtual machine.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
* `api-version` - _required_ - Client API version.

### Modify properties of virtual machines.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Create or replace an existing Virtual machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Attach a new or existing data disk to virtual machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Apply artifacts to virtual machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Take ownership of an existing virtual machine This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Detach the specified disk from the virtual machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Gets a string that represents the contents of the RDP file for the virtual machine

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Lists the applicable start/stop schedules, if any.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Redeploy a virtual machine This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Resize Virtual Machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Restart a virtual machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Start a virtual machine. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Stop a virtual machine This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Transfers all data disks attached to the virtual machine to be owned by the current user. This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### Release ownership of an existing virtual machine This operation can take a while to complete.

*Tags:* `VirtualMachines`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual machine.
* `api-version` - _required_ - Client API version.

### List schedules in a given virtual machine.

*Tags:* `VirtualMachineSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `virtualMachineName` - _required_ - The name of the virtual machine.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete schedule.

*Tags:* `VirtualMachineSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `virtualMachineName` - _required_ - The name of the virtual machine.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Get schedule.

*Tags:* `VirtualMachineSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `virtualMachineName` - _required_ - The name of the virtual machine.
* `name` - _required_ - The name of the schedule.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `api-version` - _required_ - Client API version.

### Modify properties of schedules.

*Tags:* `VirtualMachineSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `virtualMachineName` - _required_ - The name of the virtual machine.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Create or replace an existing schedule.

*Tags:* `VirtualMachineSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `virtualMachineName` - _required_ - The name of the virtual machine.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Execute a schedule. This operation can take a while to complete.

*Tags:* `VirtualMachineSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `virtualMachineName` - _required_ - The name of the virtual machine.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### List virtual networks in a given lab.

*Tags:* `VirtualNetworks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($expand=externalSubnets)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete virtual network. This operation can take a while to complete.

*Tags:* `VirtualNetworks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual network.
* `api-version` - _required_ - Client API version.

### Get virtual network.

*Tags:* `VirtualNetworks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual network.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($expand=externalSubnets)'
* `api-version` - _required_ - Client API version.

### Modify properties of virtual networks.

*Tags:* `VirtualNetworks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual network.
* `api-version` - _required_ - Client API version.

### Create or replace an existing virtual network. This operation can take a while to complete.

*Tags:* `VirtualNetworks`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `labName` - _required_ - The name of the lab.
* `name` - _required_ - The name of the virtual network.
* `api-version` - _required_ - Client API version.

### Delete lab. This operation can take a while to complete.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### Get lab.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
* `api-version` - _required_ - Client API version.

### Modify properties of labs.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### Create or replace an existing lab. This operation can take a while to complete.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### Claim a random claimable virtual machine in the lab. This operation can take a while to complete.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### Create virtual machines in a lab. This operation can take a while to complete.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### Exports the lab resource usage into a storage account This operation can take a while to complete.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### Generate a URI for uploading custom disk images to a Lab.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### Import a virtual machine into a different lab. This operation can take a while to complete.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### List disk images available for custom image creation.

*Tags:* `Labs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the lab.
* `api-version` - _required_ - Client API version.

### List schedules in a resource group.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `$filter` - _optional_ - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
* `$top` - _optional_ - The maximum number of resources to return from the operation. Example: '$top=10'
* `$orderby` - _optional_ - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
* `api-version` - _required_ - Client API version.

### Delete schedule.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Get schedule.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the schedule.
* `$expand` - _optional_ - Specify the $expand query. Example: 'properties($select=status)'
* `api-version` - _required_ - Client API version.

### Modify properties of schedules.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Create or replace an existing schedule.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Execute a schedule. This operation can take a while to complete.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

### Updates a schedule's target resource Id. This operation can take a while to complete.

*Tags:* `GlobalSchedules`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription ID.
* `resourceGroupName` - _required_ - The name of the resource group.
* `name` - _required_ - The name of the schedule.
* `api-version` - _required_ - Client API version.

## License

**flow**ground :- Telekom iPaaS / azure-com-devtestlabs-dtl-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
