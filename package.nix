{
  system,
  stdenvNoCC,
  writeShellApplication,
  wrapGAppsHook,
  gobject-introspection,
  inputs,
}:
let
  src = stdenvNoCC.mkDerivation {
    name = "astal-config.js";
    src = ./.;

    nativeBuildInputs = [
      inputs.ags.packages.${system}.default
      wrapGAppsHook
      gobject-introspection
    ];

    installPhase = ''
      runHook preInstall
      ags bundle app.ts $out
      runHook postInstall
    '';
  };
in
writeShellApplication {
  name = "astal-config";

  runtimeInputs = with inputs.astal.packages.${system}; [
    inputs.ags.packages.${system}.default
    astal3
    io
  ];

  text = ''
    ags run ${src}
  '';
}
