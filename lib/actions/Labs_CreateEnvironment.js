/**
 * Auto-generated action file for "DevTestLabsClient" API.
 *
 * Generated at: 2019-05-07T14:38:05.845Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-devtestlabs-dtl-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Labs_CreateEnvironment'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/createEnvironment'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroupName",
    "name",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroupName": "resourceGroupName",
    "name": "name",
    "api_version": "api-version",
    "location": "location",
    "allowClaim": "allowClaim",
    "artifactsApplied": "artifactsApplied",
    "deploymentStatus": "deploymentStatus",
    "totalArtifacts": "totalArtifacts",
    "artifactDeploymentStatus": "artifactDeploymentStatus",
    "artifacts": "artifacts",
    "instanceCount": "instanceCount",
    "bulkCreationParameters": "bulkCreationParameters",
    "computeId": "computeId",
    "createdByUser": "createdByUser",
    "createdByUserId": "createdByUserId",
    "createdDate": "createdDate",
    "customImageId": "customImageId",
    "dataDiskParameters": "dataDiskParameters",
    "disallowPublicIpAddress": "disallowPublicIpAddress",
    "environmentId": "environmentId",
    "expirationDate": "expirationDate",
    "fqdn": "fqdn",
    "offer": "offer",
    "osType": "osType",
    "publisher": "publisher",
    "sku": "sku",
    "version": "version",
    "galleryImageReference": "galleryImageReference",
    "isAuthenticationWithSshKey": "isAuthenticationWithSshKey",
    "labSubnetName": "labSubnetName",
    "labVirtualNetworkId": "labVirtualNetworkId",
    "lastKnownPowerState": "lastKnownPowerState",
    "dnsName": "dnsName",
    "privateIpAddress": "privateIpAddress",
    "publicIpAddress": "publicIpAddress",
    "publicIpAddressId": "publicIpAddressId",
    "rdpAuthority": "rdpAuthority",
    "inboundNatRules": "inboundNatRules",
    "sharedPublicIpAddressConfiguration": "sharedPublicIpAddressConfiguration",
    "sshAuthority": "sshAuthority",
    "subnetId": "subnetId",
    "virtualNetworkId": "virtualNetworkId",
    "networkInterface": "networkInterface",
    "notes": "notes",
    "ownerObjectId": "ownerObjectId",
    "ownerUserPrincipalName": "ownerUserPrincipalName",
    "password": "password",
    "planId": "planId",
    "scheduleParameters": "scheduleParameters",
    "size": "size",
    "sshKey": "sshKey",
    "storageType": "storageType",
    "userName": "userName",
    "virtualMachineCreationSource": "virtualMachineCreationSource",
    "properties": "properties",
    "tags": "tags",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'Labs_CreateEnvironment',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/createEnvironment',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}