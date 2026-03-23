# capture-screenshots.ps1 — Cycle through all 6 themes for screenshots
# Usage: Run this, then manually screenshot each theme (Win+Shift+S)
# Each theme stays active for 8 seconds before switching to the next.

$themes = @(
    "Synagraphic: Void Circuit",
    "Synagraphic: Neon Decay",
    "Synagraphic: Ghost Protocol",
    "Synagraphic: Plasma Drift",
    "Synagraphic: Acid Rain",
    "Synagraphic: Martian"
)

$sampleFile = "$PSScriptRoot\..\assets\screenshot-sample.tsx"

# Open the sample file in VS Code
code $sampleFile

Write-Host "`nScreenshot Capture Helper" -ForegroundColor Cyan
Write-Host "========================" -ForegroundColor Cyan
Write-Host "Each theme will be applied for 8 seconds."
Write-Host "Use Win+Shift+S to capture each one.`n"

foreach ($theme in $themes) {
    $shortName = ($theme -replace 'Synagraphic: ', '').ToLower() -replace ' ', '-'

    # Apply the theme via VS Code settings
    code --goto "$sampleFile:1" 2>$null

    # Use VS Code's command to change theme
    # This writes directly to settings.json
    $settingsPath = "$env:APPDATA\Code\User\settings.json"
    if (Test-Path $settingsPath) {
        $settings = Get-Content $settingsPath -Raw | ConvertFrom-Json
        $settings.'workbench.colorTheme' = $theme
        $settings | ConvertTo-Json -Depth 10 | Set-Content $settingsPath -Encoding utf8
    }

    Write-Host "  Theme: $theme" -ForegroundColor Yellow
    Write-Host "  Save as: assets/screenshots/$shortName.png" -ForegroundColor DarkGray
    Write-Host "  Waiting 8s... (screenshot now with Win+Shift+S)" -ForegroundColor Green
    Start-Sleep -Seconds 8
    Write-Host ""
}

Write-Host "Done! Restore your preferred theme in VS Code settings." -ForegroundColor Cyan
Write-Host "Screenshots should be saved to: assets/screenshots/" -ForegroundColor DarkGray
