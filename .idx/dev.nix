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
    enable = true;
    previews = [
      {
        command = ["python3" "-m" "http.server" "$PORT" "--bind" "0.0.0.0"];
        manager = "web";
        id = "web";
      }
      {
        id = "ios";
        manager = "ios";
      }
    ];
  };
}