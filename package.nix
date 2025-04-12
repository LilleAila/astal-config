{
  system,
  stdenvNoCC,
  wrapGAppsHook,
  gobject-introspection,
  inputs,
}:
stdenvNoCC.mkDerivation rec {
  name = "my-shell";
  src = ./.;

  nativeBuildInputs = [
    inputs.ags.packages.${system}.default
    wrapGAppsHook
    gobject-introspection
  ];

  buildInputs = with inputs.astal.packages.${system}; [
    astal3
    io
  ];

  installPhase = ''
    runHook preInstall

    mkdir -p $out/bin
    ags bundle app.ts astal-config
    install -m 755 astal-config $out/bin/${name}

    runHook postInstall
  '';
}
