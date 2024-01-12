{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  packages = [
    pkgs.nodejs
    pkgs.nodePackages.firebase-tools
    pkgs.google-cloud-sdk
  ];
  idx.extensions = [
    "Wakatime.vscode-wakatime"
  ];
  idx.previews = {
    
  };
}