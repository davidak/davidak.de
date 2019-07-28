let
  # use pinned nixpkgs
  nixpkgs = import ./nixpkgs.nix;
in

# This allows overriding pkgs by passing `--arg pkgs ...`
{ pkgs ? import nixpkgs {} }:

with pkgs;

mkShell {
  buildInputs = [
    (python3.withPackages (ps: with ps; [Nikola micawber]))
  ];

  # Workaround for https://github.com/NixOS/nixpkgs/issues/43685
  shellHook = ''
    rm -rf output/assets
  '';
}
