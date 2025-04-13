{
  system,
  stdenvNoCC,
  writeShellApplication,
  sass,
  inputs,
}:
writeShellApplication {
  name = "astal-config";

  runtimeInputs = [
    inputs.ags.packages.${system}.agsFull
  ];

  # ags run does not require bundling it first
  text = ''
    ags run ${./.}/app.ts
  '';
}
