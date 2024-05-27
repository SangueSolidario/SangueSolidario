#!/bin/bash

resourceGroupName="sanguesolidario-rg"
location="uksouth"
appName="sanguesolidario"
dockerImageName="goncalojmrosa/sangue-solidario"
servicePlanName="sanguesolidario-service-plan"

echo "Logging in to Azure..."
az login

echo "Checking for existing resource group..."
resourceGroup=$(az group show --name $resourceGroupName --query "name" --output tsv)
if [ -z "$resourceGroup" ]; then
    echo "Creating resource group..."
    az group create --name $resourceGroupName --location $location
else
    echo "Resource group '$resourceGroupName' already exists."
fi

echo "Checking for existing App Service plan..."
servicePlan=$(az appservice plan show --name $servicePlanName --resource-group $resourceGroupName --query "name" --output tsv)
if [ -z "$servicePlan" ]; then
    echo "Creating App Service plan..."
    az appservice plan create --name $servicePlanName --resource-group $resourceGroupName --sku B1 --is-linux
else
    echo "App Service plan '$servicePlanName' already exists."
fi

echo "Checking for existing Web App..."
webApp=$(az webapp show --name $appName --resource-group $resourceGroupName --query "name" --output tsv)
if [ -z "$webApp" ]; then
    echo "Creating Web App for Containers..."
    az webapp create --resource-group $resourceGroupName --plan $servicePlanName --name $appName --deployment-container-image-name $dockerImageName
else
    echo "Web App '$appName' already exists."
fi

echo "Configuring Web App to use Docker Hub image..."
az webapp config container set --name $appName --resource-group $resourceGroupName --docker-custom-image-name $dockerImageName

echo "Web App URL:"
webAppUrl=$(az webapp show --name $appName --resource-group $resourceGroupName --query "defaultHostName" --output tsv)
echo "http://$webAppUrl"
