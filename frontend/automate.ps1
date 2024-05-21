$resourceGroupName = "sanguesolidario-rg"
$location = "uksouth"
$appName = "sanguesolidario"
$dockerImageName = "goncalojmrosa/sangue-solidario"
$servicePlanName = "sanguesolidario-service-plan"

Write-Host "Logging in to Azure..."
az login

Write-Host "Checking for existing resource group..."
$resourceGroup = az group show --name $resourceGroupName --query "name" --output tsv
if (!$resourceGroup) {
    Write-Host "Creating resource group..."
    az group create --name $resourceGroupName --location $location
} else {
    Write-Host "Resource group '$resourceGroupName' already exists."
}
Write-Host "Checking for existing App Service plan..."
$servicePlan = az appservice plan show --name $servicePlanName --resource-group $resourceGroupName --query "name" --output tsv
if (!$servicePlan) {
    Write-Host "Creating App Service plan..."
    az appservice plan create --name $servicePlanName --resource-group $resourceGroupName --sku B1 --is-linux
} else {
    Write-Host "App Service plan '$servicePlanName' already exists."
}

Write-Host "Checking for existing Web App..."
$webApp = az webapp show --name $appName --resource-group $resourceGroupName --query "name" --output tsv
if (!$webApp) {
    Write-Host "Creating Web App for Containers..."
    az webapp create --resource-group $resourceGroupName --plan $servicePlanName --name $appName --deployment-container-image-name $dockerImageName
} else {
    Write-Host "Web App '$appName' already exists."
}

Write-Host "Configuring Web App to use Docker Hub image..."
az webapp config container set --name $appName --resource-group $resourceGroupName --docker-custom-image-name $dockerImageName

Write-Host "Web App URL:"
$webAppUrl = az webapp show --name $appName --resource-group $resourceGroupName --query "defaultHostName" --output tsv
Write-Host "http://$webAppUrl"
