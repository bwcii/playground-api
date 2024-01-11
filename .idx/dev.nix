{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  packages = [
    pkgs.nodejs
    pkgs.nodePackages.firebase-tools
  ];
  idx.extensions = [
    "Wakatime.vscode-wakatime"
  ];
  idx.previews = {
    
  };
}