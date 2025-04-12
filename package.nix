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
  src = stdenvNoCC.mkDerivation {
    name = "astal-config.js";
    src = ./.;

    nativeBuildInputs = [
      inputs.ags.packages.${system}.default
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
    inputs.ags.packages.${system}.default
    astal3
    io
  ];

  text = ''
    ags run ${src}
  '';
}
