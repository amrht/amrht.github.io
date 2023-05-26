with import <nixpkgs> {};

stdenv.mkDerivation rec {
  name = "my-project";
  src = ./.;

  buildInputs = [
    yarn
    nodejs
  ];

  buildPhase = ''
    npm install
  '';

  installPhase = ''
    mkdir -p $out
    cp -r * $out
  '';
}

