{
  system,
  stdenvNoCC,
  writeShellApplication,
  wrapGAppsHook,
  gobject-introspection,
  sass,
  inputs,
}:
let
  ags = inputs.ags.packages.${system}.default.override {
    extraPackages = with inputs.ags.packages.${system}; [
      battery
      tray
      network
      wireplumber
    ];
  };

  src = stdenvNoCC.mkDerivation {
    name = "astal-config.js";
    src = ./.;

    nativeBuildInputs = [
      ags
      wrapGAppsHook
      gobject-introspection
      sass
    ];

    installPhase = ''
      runHook preInstall
      sass ./style.scss ./style.css
      ags bundle app.ts $out
      runHook postInstall
    '';
  };
in
writeShellApplication {
  name = "astal-config";

  runtimeInputs = with inputs.astal.packages.${system}; [
    ags
    astal3
    io
    battery
  ];

  text = ''
    ags run ${src}
  '';
}
